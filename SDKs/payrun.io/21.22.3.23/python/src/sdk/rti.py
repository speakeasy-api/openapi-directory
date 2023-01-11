import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Rti:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_rti_transaction(self, request: operations.DeleteRtiTransactionRequest) -> operations.DeleteRtiTransactionResponse:
        r"""Delete the RTI transaction
        Deletes the specified RTI transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRtiTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_all_rti_transaction_tags(self, request: operations.GetAllRtiTransactionTagsRequest) -> operations.GetAllRtiTransactionTagsResponse:
        r"""Get all RTI transaction tags
        Gets all the RTI transaction tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/RtiTransactions/Tags", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllRtiTransactionTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_transaction_from_employer(self, request: operations.GetRtiTransactionFromEmployerRequest) -> operations.GetRtiTransactionFromEmployerResponse:
        r"""Get the RTI transaction
        Returns the specified RTI transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiTransactionFromEmployerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RtiTransactionBase])
                res.rti_transaction_base = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_transactions_from_employer(self, request: operations.GetRtiTransactionsFromEmployerRequest) -> operations.GetRtiTransactionsFromEmployerResponse:
        r"""Get all RTI transactions for the employer
        Get links for all RTI transactions for the specified employer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/RtiTransactions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiTransactionsFromEmployerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_rti_transactions_with_tag(self, request: operations.GetRtiTransactionsWithTagRequest) -> operations.GetRtiTransactionsWithTagResponse:
        r"""Get RTI transactions with tag
        Gets the RTI transactions with the tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/RtiTransactions/Tag/{TagId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRtiTransactionsWithTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    