

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://westcentralus.api.cognitive.microsoft.com/vision/v2.1",
	"https://{Endpoint}/vision/v2.1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def batch_read_file(self, request: operations.BatchReadFileRequest) -> operations.BatchReadFileResponse:
        r"""Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/read/core/asyncBatchAnalyze"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BatchReadFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputerVisionError])
                res.computer_vision_error = out

        return res

    
    def get_read_operation_result(self, request: operations.GetReadOperationResultRequest) -> operations.GetReadOperationResultResponse:
        r"""This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/read/operations/{operationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadOperationResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReadOperationResult])
                res.read_operation_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputerVisionError])
                res.computer_vision_error = out

        return res

    
    def get_text_operation_result(self, request: operations.GetTextOperationResultRequest) -> operations.GetTextOperationResultResponse:
        r"""This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/textOperations/{operationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextOperationResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TextOperationResult])
                res.text_operation_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputerVisionError])
                res.computer_vision_error = out

        return res

    
    def recognize_text(self, request: operations.RecognizeTextRequest) -> operations.RecognizeTextResponse:
        r"""Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recognizeText"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecognizeTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputerVisionError])
                res.computer_vision_error = out

        return res

    