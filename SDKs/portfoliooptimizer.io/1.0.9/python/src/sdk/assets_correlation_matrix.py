import requests
from typing import Optional
from sdk.models import operations
from . import utils

class AssetsCorrelationMatrix:
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

    
    def post_assets_correlation_matrix(self, request: operations.PostAssetsCorrelationMatrixRequest) -> operations.PostAssetsCorrelationMatrixResponse:
        r"""Correlation Matrix
        Compute the Pearson correlation matrix of assets from either:  
        * The assets returns
        * The assets covariance matrix
        
        References
        * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrix200ApplicationJSON])
                res.post_assets_correlation_matrix_200_application_json_object = out

        return res

    
    def post_assets_correlation_matrix_nearest(self, request: operations.PostAssetsCorrelationMatrixNearestRequest) -> operations.PostAssetsCorrelationMatrixNearestResponse:
        r"""Nearest Correlation Matrix
        Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
        
        References
        * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/nearest"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixNearestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixNearest200ApplicationJSON])
                res.post_assets_correlation_matrix_nearest_200_application_json_object = out

        return res

    
    def post_assets_correlation_matrix_shrinkage(self, request: operations.PostAssetsCorrelationMatrixShrinkageRequest) -> operations.PostAssetsCorrelationMatrixShrinkageResponse:
        r"""Correlation Matrix Shrinkage
        Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:  
        * An equicorrelation matrix made of 1
        * An equicorrelation matrix made of 0
        * An equicorrelation matrix made of -1/(n-1), with n the number of assets
        * A provided correlation matrix
        
        References
        * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/shrinkage"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixShrinkageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJSON])
                res.post_assets_correlation_matrix_shrinkage_200_application_json_object = out

        return res

    
    def post_assets_correlation_matrix_validation(self, request: operations.PostAssetsCorrelationMatrixValidationRequest) -> operations.PostAssetsCorrelationMatrixValidationResponse:
        r"""Correlation Matrix Validation
        Validate whether a matrix is a correlation matrix.
        
        References
        * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/validation"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixValidationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixValidation200ApplicationJSON])
                res.post_assets_correlation_matrix_validation_200_application_json_object = out

        return res

    