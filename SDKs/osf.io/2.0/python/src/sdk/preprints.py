import requests
from typing import Any
from sdk.models import operations
from . import utils

class Preprints:
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

    
    def preprints_citation_list(self, request: operations.PreprintsCitationListRequest) -> operations.PreprintsCitationListResponse:
        r"""Retrieve citation details
        The citation details for a preprint, in CSL format.
        #### Returns
        Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprints/{preprint_id}/citation/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintsCitationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprints_citation_read(self, request: operations.PreprintsCitationReadRequest) -> operations.PreprintsCitationReadResponse:
        r"""Retrieve a styled citation
        The citation for a preprint in a specific style.
        #### Returns
        Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprints/{preprint_id}/citation/{style_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintsCitationReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprints_create(self, request: operations.PreprintsCreateRequest) -> operations.PreprintsCreateResponse:
        r"""Create a preprint
        Creates a new preprint.
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/preprints/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def preprints_list(self) -> operations.PreprintsListResponse:
        r"""List all preprints
        
        A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        This request should never return an error.
        #### Filtering
        You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.
        
        Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/preprints/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprints_partial_update(self, request: operations.PreprintsPartialUpdateRequest) -> operations.PreprintsPartialUpdateResponse:
        r"""Update a preprint
        Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
        #### Returns
        Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprints/{preprint_id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def preprints_read(self, request: operations.PreprintsReadRequest) -> operations.PreprintsReadResponse:
        r"""Retrieve a preprint
        Retrieves the details of a preprint.
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprints/{preprint_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    