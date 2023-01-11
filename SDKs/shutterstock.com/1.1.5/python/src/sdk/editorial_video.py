import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class EditorialVideo:
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

    
    def get_editorial_video(self, request: operations.GetEditorialVideoRequest) -> operations.GetEditorialVideoResponse:
        r"""Get editorial video content details
        This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/videos/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialVideoContent])
                res.editorial_video_content = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_editorial_video_license_list(self, request: operations.GetEditorialVideoLicenseListRequest) -> operations.GetEditorialVideoLicenseListResponse:
        r"""List editorial video licenses
        This endpoint lists existing editorial video licenses.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/videos/licenses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialVideoLicenseListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.download_history_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def license_editorial_video(self, request: operations.LicenseEditorialVideoRequest) -> operations.LicenseEditorialVideoResponse:
        r"""License editorial video content
        This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/videos/licenses"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseEditorialVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.license_editorial_content_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def list_editorial_video_categories(self, request: operations.ListEditorialVideoCategoriesRequest) -> operations.ListEditorialVideoCategoriesResponse:
        r"""List editorial video categories
        This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/videos/categories"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEditorialVideoCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialVideoCategoryResults])
                res.editorial_video_category_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def search_editorial_videos(self, request: operations.SearchEditorialVideosRequest) -> operations.SearchEditorialVideosResponse:
        r"""Search editorial video content
        This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/videos/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchEditorialVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialVideoSearchResults])
                res.editorial_video_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    