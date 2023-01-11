import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class EditorialImages:
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

    
    def get_editorial_categories(self, request: operations.GetEditorialCategoriesRequest) -> operations.GetEditorialCategoriesResponse:
        r"""(Deprecated) List editorial categories
        Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/categories"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialCategoryResults])
                res.editorial_category_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_editorial_image(self, request: operations.GetEditorialImageRequest) -> operations.GetEditorialImageResponse:
        r"""Get editorial content details
        This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/images/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialContent])
                res.editorial_content = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_editorial_image_license_list(self, request: operations.GetEditorialImageLicenseListRequest) -> operations.GetEditorialImageLicenseListResponse:
        r"""List editorial image licenses
        This endpoint lists existing editorial image licenses.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/images/licenses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialImageLicenseListResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_editorial_image_livefeed(self, request: operations.GetEditorialImageLivefeedRequest) -> operations.GetEditorialImageLivefeedResponse:
        r"""Get editorial livefeed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/images/livefeeds/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialImageLivefeedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialImageLivefeed])
                res.editorial_image_livefeed = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_editorial_image_livefeed_items(self, request: operations.GetEditorialImageLivefeedItemsRequest) -> operations.GetEditorialImageLivefeedItemsResponse:
        r"""Get editorial livefeed items
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/images/livefeeds/{id}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialImageLivefeedItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.editorial_image_content_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_editorial_image_livefeed_list(self, request: operations.GetEditorialImageLivefeedListRequest) -> operations.GetEditorialImageLivefeedListResponse:
        r"""Get editorial livefeed list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/images/livefeeds"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialImageLivefeedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialImageLivefeedList])
                res.editorial_image_livefeed_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_editorial_livefeed(self, request: operations.GetEditorialLivefeedRequest) -> operations.GetEditorialLivefeedResponse:
        r"""(Deprecated) Get editorial livefeed
        Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/livefeeds/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialLivefeedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialLivefeed])
                res.editorial_livefeed = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_editorial_livefeed_items(self, request: operations.GetEditorialLivefeedItemsRequest) -> operations.GetEditorialLivefeedItemsResponse:
        r"""(Deprecated) Get editorial livefeed items
        Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/livefeeds/{id}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialLivefeedItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.editorial_content_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_editorial_livefeed_list(self, request: operations.GetEditorialLivefeedListRequest) -> operations.GetEditorialLivefeedListResponse:
        r"""(Deprecated) Get editorial livefeed list
        Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/livefeeds"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEditorialLivefeedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialLivefeedList])
                res.editorial_livefeed_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_updated_editorial_images(self, request: operations.GetUpdatedEditorialImagesRequest) -> operations.GetUpdatedEditorialImagesResponse:
        r"""List updated content
        This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/images/updated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdatedEditorialImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialUpdatedResults])
                res.editorial_updated_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_v2_editorial_updated(self, request: operations.GetV2EditorialUpdatedRequest) -> operations.GetV2EditorialUpdatedResponse:
        r"""(Deprecated) List updated content
        Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/updated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV2EditorialUpdatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialUpdatedResults])
                res.editorial_updated_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_v2_editorial_id_(self, request: operations.GetV2EditorialIDRequest) -> operations.GetV2EditorialIDResponse:
        r"""(Deprecated) Get editorial content details
        Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/editorial/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV2EditorialIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialContent])
                res.editorial_content = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def license_editorial_image(self, request: operations.LicenseEditorialImageRequest) -> operations.LicenseEditorialImageResponse:
        r"""(Deprecated) License editorial content
        Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/licenses"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseEditorialImageResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 406:
            pass

        return res

    
    def license_editorial_images(self, request: operations.LicenseEditorialImagesRequest) -> operations.LicenseEditorialImagesResponse:
        r"""License editorial content
        This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/images/licenses"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseEditorialImagesResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 406:
            pass

        return res

    
    def list_editorial_image_categories(self, request: operations.ListEditorialImageCategoriesRequest) -> operations.ListEditorialImageCategoriesResponse:
        r"""List editorial categories
        This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/images/categories"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEditorialImageCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialImageCategoryResults])
                res.editorial_image_category_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def search_editorial(self, request: operations.SearchEditorialRequest) -> operations.SearchEditorialResponse:
        r"""(Deprecated) Search editorial content
        Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchEditorialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialSearchResults])
                res.editorial_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def search_editorial_images(self, request: operations.SearchEditorialImagesRequest) -> operations.SearchEditorialImagesResponse:
        r"""Search editorial images
        This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/editorial/images/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchEditorialImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialSearchResults])
                res.editorial_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass

        return res

    