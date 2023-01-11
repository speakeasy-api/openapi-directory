import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Strings:
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

    
    def get_project_strings(self, request: operations.GetProjectStringsRequest) -> operations.GetProjectStringsResponse:
        r"""Get a list of strings and its translations in the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/strings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectStringsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringList])
                res.string_list = out

        return res

    
    def get_project_strings_for_language(self, request: operations.GetProjectStringsForLanguageRequest) -> operations.GetProjectStringsForLanguageResponse:
        r"""Get a list of strings and its translations in the project for this target language in the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/strings/{language}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectStringsForLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringList])
                res.string_list = out

        return res

    
    def get_strings(self, request: operations.GetStringsRequest) -> operations.GetStringsResponse:
        r"""Get a list of client/corporate strings (20 per page)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/strings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStringsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientStrings])
                res.client_strings = out

        return res

    
    def package_project_translation_memory(self, request: operations.PackageProjectTranslationMemoryRequest) -> operations.PackageProjectTranslationMemoryResponse:
        r"""Get the translation memory of a project in TMX format
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/strings/package", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageProjectTranslationMemoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out
            if utils.match_content_type(content_type, "application/xml"):
                res.package_project_translation_memory_200_application_xml_binary_string = r.content

        return res

    
    def package_project_translation_memory_for_language(self, request: operations.PackageProjectTranslationMemoryForLanguageRequest) -> operations.PackageProjectTranslationMemoryForLanguageResponse:
        r"""Get the translation memory of a project in TMX format
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/strings/{languageCode}/package", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageProjectTranslationMemoryForLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out
            if utils.match_content_type(content_type, "application/xml"):
                res.package_project_translation_memory_for_language_200_application_xml_binary_string = r.content

        return res

    
    def package_project_translation_memory_for_language_status(self, request: operations.PackageProjectTranslationMemoryForLanguageStatusRequest) -> operations.PackageProjectTranslationMemoryForLanguageStatusResponse:
        r"""If package call was async, check the status of the request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/strings/{languageCode}/package/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageProjectTranslationMemoryForLanguageStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out

        return res

    
    def package_project_translation_memory_status(self, request: operations.PackageProjectTranslationMemoryStatusRequest) -> operations.PackageProjectTranslationMemoryStatusResponse:
        r"""If package call was async, check the status of the request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/strings/package/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageProjectTranslationMemoryStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out

        return res

    
    def package_user_translation_memory(self, request: operations.PackageUserTranslationMemoryRequest) -> operations.PackageUserTranslationMemoryResponse:
        r"""Get the translation memory of a client or corporate in TMX format
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/strings/{languageCode}/package", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageUserTranslationMemoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out
            if utils.match_content_type(content_type, "application/xml"):
                res.package_user_translation_memory_200_application_xml_binary_string = r.content

        return res

    
    def package_user_translation_memory_for_language_status(self, request: operations.PackageUserTranslationMemoryForLanguageStatusRequest) -> operations.PackageUserTranslationMemoryForLanguageStatusResponse:
        r"""If package call was async, check the status of the request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/strings/{languageCode}/package/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageUserTranslationMemoryForLanguageStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out

        return res

    
    def post_strings(self, request: operations.PostStringsRequest) -> operations.PostStringsResponse:
        r"""Translate Strings with MT
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/strings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStringsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MachineTranslatedStrings])
                res.machine_translated_strings = out

        return res

    
    def update_translation_memory_unit(self, request: operations.UpdateTranslationMemoryUnitRequest) -> operations.UpdateTranslationMemoryUnitResponse:
        r"""Update translation
        Update a translation by adding a new translation memory unit item
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/strings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTranslationMemoryUnitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    