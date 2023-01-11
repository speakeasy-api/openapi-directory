import requests
from typing import Optional
from sdk.models import operations
from . import utils

class AssetsCovarianceMatrix:
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

    
    def post_assets_covariance_matrix(self, request: operations.PostAssetsCovarianceMatrixRequest) -> operations.PostAssetsCovarianceMatrixResponse:
        r"""Covariance Matrix
        Compute the covariance matrix of assets from either:  
        * The assets correlation matrix and their volatilities (i.e., standard deviations)
        * The assets correlation matrix and their variances
        * The assets returns
        
        References
        * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/covariance/matrix"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrix200ApplicationJSON])
                res.post_assets_covariance_matrix_200_application_json_object = out

        return res

    
    def post_assets_covariance_matrix_sample(self, request: operations.PostAssetsCovarianceMatrixSampleRequest) -> operations.PostAssetsCovarianceMatrixSampleResponse:
        r"""Sample Covariance Matrix
        Compute the sample covariance matrix of assets returns.
        
        > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
        
        References
        * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/covariance/matrix/sample"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrixSample200ApplicationJSON])
                res.post_assets_covariance_matrix_sample_200_application_json_object = out

        return res

    
    def post_assets_covariance_matrix_validation(self, request: operations.PostAssetsCovarianceMatrixValidationRequest) -> operations.PostAssetsCovarianceMatrixValidationResponse:
        r"""Covariance Matrix Validation
        Validate whether a matrix is a covariance matrix.
        
        References
        * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/covariance/matrix/validation"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixValidationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrixValidation200ApplicationJSON])
                res.post_assets_covariance_matrix_validation_200_application_json_object = out

        return res

    