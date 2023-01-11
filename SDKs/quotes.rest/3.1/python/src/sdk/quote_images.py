import requests
from typing import Optional
from sdk.models import operations
from . import utils

class QuoteImages:
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

    
    def delete_quote_image(self, request: operations.DeleteQuoteImageRequest) -> operations.DeleteQuoteImageResponse:
        r"""Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQuoteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_quote_image_background(self, request: operations.DeleteQuoteImageBackgroundRequest) -> operations.DeleteQuoteImageBackgroundResponse:
        r"""Delete a background image file. The user needs to be the owner of the background image to be able to delete it.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/background"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQuoteImageBackgroundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_quote_image_font(self, request: operations.DeleteQuoteImageFontRequest) -> operations.DeleteQuoteImageFontResponse:
        r"""Delete a font file. The user needs to be the owner of the font to be able to delete it.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/font"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQuoteImageFontResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote_image(self, request: operations.GetQuoteImageRequest) -> operations.GetQuoteImageResponse:
        r"""Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote_image_background_list(self, request: operations.GetQuoteImageBackgroundListRequest) -> operations.GetQuoteImageBackgroundListResponse:
        r"""Lists background images in your private collection. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/background/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteImageBackgroundListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote_image_background_search(self, request: operations.GetQuoteImageBackgroundSearchRequest) -> operations.GetQuoteImageBackgroundSearchResponse:
        r"""Searches for a background image with a given tag. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/background/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteImageBackgroundSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote_image_font_list(self, request: operations.GetQuoteImageFontListRequest) -> operations.GetQuoteImageFontListResponse:
        r"""Lists background images in your private collection. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/font/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteImageFontListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote_image_font_search(self, request: operations.GetQuoteImageFontSearchRequest) -> operations.GetQuoteImageFontSearchResponse:
        r"""Searches for a font with a given tag. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/font/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteImageFontSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote_image_search(self, request: operations.GetQuoteImageSearchRequest) -> operations.GetQuoteImageSearchResponse:
        r"""Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteImageSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_image_background(self, request: operations.PostQuoteImageBackgroundRequest) -> operations.PostQuoteImageBackgroundResponse:
        r"""Add an image for use later as a quote background image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/background"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteImageBackgroundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_quote_image_background_tags_add(self, request: operations.PostQuoteImageBackgroundTagsAddRequest) -> operations.PostQuoteImageBackgroundTagsAddResponse:
        r"""Add a tag to a given Image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/background/tags/add"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteImageBackgroundTagsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_image_background_tags_remove(self, request: operations.PostQuoteImageBackgroundTagsRemoveRequest) -> operations.PostQuoteImageBackgroundTagsRemoveResponse:
        r"""Remove a tag from a given Image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/background/tags/remove"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteImageBackgroundTagsRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_image_font(self, request: operations.PostQuoteImageFontRequest) -> operations.PostQuoteImageFontResponse:
        r"""Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/font"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteImageFontResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_quote_image_font_tags_add(self, request: operations.PostQuoteImageFontTagsAddRequest) -> operations.PostQuoteImageFontTagsAddResponse:
        r"""Add a tag to a given font.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/font/tags/add"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteImageFontTagsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_image_font_tags_remove(self, request: operations.PostQuoteImageFontTagsRemoveRequest) -> operations.PostQuoteImageFontTagsRemoveResponse:
        r"""Remove a tag from a given Font.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image/font/tags/remove"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteImageFontTagsRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_quote_image(self, request: operations.PutQuoteImageRequest) -> operations.PutQuoteImageResponse:
        r"""Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/image"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutQuoteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    