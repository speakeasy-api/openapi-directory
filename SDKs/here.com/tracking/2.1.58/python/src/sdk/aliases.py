import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Aliases:
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

    
    def delete_aliases_v2_tracking_id_(self, request: operations.DeleteAliasesV2TrackingIDRequest) -> operations.DeleteAliasesV2TrackingIDResponse:
        r"""Deletes all aliases
        Deletes all aliases associated with this device.
        
        As an extra safety measure, you must also supply the header `x-confirm`
        with the value `true`. If this header is not explicitly specified on a
        **Delete All** request, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aliases/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAliasesV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingID400ApplicationJSON])
                res.delete_aliases_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingID401ApplicationJSON])
                res.delete_aliases_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingID403ApplicationJSON])
                res.delete_aliases_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingID404ApplicationJSON])
                res.delete_aliases_v2_tracking_id_404_application_json_object = out

        return res

    
    def delete_aliases_v2_tracking_id_type_(self, request: operations.DeleteAliasesV2TrackingIDTypeRequest) -> operations.DeleteAliasesV2TrackingIDTypeResponse:
        r"""Deletes all aliases of a type
        Deletes all aliases of a type associated with this device.
        
        As an extra safety measure, you must also supply the header `x-confirm`
        with the value `true`. If this header is not explicitly specified on a
        **Delete All** request, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aliases/v2/{trackingId}/{type}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAliasesV2TrackingIDTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDType400ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDType401ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDType403ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDType404ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_404_application_json_object = out

        return res

    
    def delete_aliases_v2_tracking_id_type_external_id_(self, request: operations.DeleteAliasesV2TrackingIDTypeExternalIDRequest) -> operations.DeleteAliasesV2TrackingIDTypeExternalIDResponse:
        r"""Deletes an alias
        Deletes a single alias based on the provided alias key.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aliases/v2/{trackingId}/{type}/{externalId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAliasesV2TrackingIDTypeExternalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDTypeExternalID400ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_external_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDTypeExternalID401ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_external_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDTypeExternalID403ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_external_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAliasesV2TrackingIDTypeExternalID404ApplicationJSON])
                res.delete_aliases_v2_tracking_id_type_external_id_404_application_json_object = out

        return res

    
    def get_aliases_v2(self, request: operations.GetAliasesV2Request) -> operations.GetAliasesV2Response:
        r"""Provides all aliases in a paginated JSON object.
        Gets all aliases on the account.
        
        If the request is supplied with `type` query parameter, the successful response will contain
        only aliases of the given type.
        
        If the request is supplied with `externalId` query parameter, the
        successful response will contain only aliases which match to given
        externalId. In this query it is possible to use wildcards:
        '*' matches to any number of any characters,
        '?' matches to any one character.
        
        If the request is supplied with `after` query parameter, the successful response will
        contain aliases created after the given timestamp.
        
        The `count` and `pageToken` parameters provide pagination for results
        where the user has large amount of aliases.
        
        In this case, `count` is the number of records returned per page along with
        a `pageToken` header in the returned HTTP response. The `pageToken` indicates
        the next available page in the matching result set. To get the next page of
        records, submit `pageToken` as a query parameter in your next request. Using
        `after` parameter with `pageToken` is forbidden.
        
        The paginated results are returned in the order of the alias creation time.
        All aliases of a trackingId may therefore not fit in the same page.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases/v2"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2200ApplicationJSON])
                res.get_aliases_v2_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2400ApplicationJSON])
                res.get_aliases_v2_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2401ApplicationJSON])
                res.get_aliases_v2_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2403ApplicationJSON])
                res.get_aliases_v2_403_application_json_object = out

        return res

    
    def get_aliases_v2_health(self) -> operations.GetAliasesV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2Health200ApplicationJSON])
                res.get_aliases_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_aliases_v2_tracking_id(self, request: operations.GetAliasesV2TrackingIDRequest) -> operations.GetAliasesV2TrackingIDResponse:
        r"""Gets the trackingId associated with an alias
        Retrieves the trackingId associated with the alias. This will return the value
        as a string or 404 if the alias does not exist.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases/v2/trackingId"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID200ApplicationJSON])
                res.get_aliases_v2_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID400ApplicationJSON])
                res.get_aliases_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID401ApplicationJSON])
                res.get_aliases_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID403ApplicationJSON])
                res.get_aliases_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID404ApplicationJSON])
                res.get_aliases_v2_tracking_id_404_application_json_object = out

        return res

    
    def get_aliases_v2_version(self) -> operations.GetAliasesV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_aliases_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_aliases_v2_tracking_id_(self, request: operations.GetAliasesV2TrackingIDRequest) -> operations.GetAliasesV2TrackingIDResponse1:
        r"""Gets all aliases of this device
        Provides all aliases of a device in a JSON object.
        
        If the request is supplied with `type` query parameter, the successful response will contain
        only aliases of the given type.
        
        The `count` and `pageToken` parameters provide pagination for results
        where the user has large amount of aliases.
        
        In this case, `count` is the number of records returned per page along with
        a `pageToken` header in the returned HTTP response. The `pageToken` indicates
        the next available page in the matching result set. To get the next page of
        records, submit `pageToken` as a query parameter in your next request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aliases/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesV2TrackingIDResponse1(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID200ApplicationJson1])
                res.get_aliases_v2_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID400ApplicationJSON])
                res.get_aliases_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID401ApplicationJSON])
                res.get_aliases_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID403ApplicationJSON])
                res.get_aliases_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingID404ApplicationJSON])
                res.get_aliases_v2_tracking_id_404_application_json_object = out

        return res

    
    def get_aliases_v2_tracking_id_type_(self, request: operations.GetAliasesV2TrackingIDTypeRequest) -> operations.GetAliasesV2TrackingIDTypeResponse:
        r"""Gets all aliases of a type of this device
        Provides all aliases of a type in a JSON object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aliases/v2/{trackingId}/{type}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesV2TrackingIDTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingIDType200ApplicationJSON])
                res.get_aliases_v2_tracking_id_type_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingIDType400ApplicationJSON])
                res.get_aliases_v2_tracking_id_type_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingIDType401ApplicationJSON])
                res.get_aliases_v2_tracking_id_type_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingIDType403ApplicationJSON])
                res.get_aliases_v2_tracking_id_type_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAliasesV2TrackingIDType404ApplicationJSON])
                res.get_aliases_v2_tracking_id_type_404_application_json_object = out

        return res

    
    def put_aliases_v2_tracking_id_type_external_id_(self, request: operations.PutAliasesV2TrackingIDTypeExternalIDRequest) -> operations.PutAliasesV2TrackingIDTypeExternalIDResponse:
        r"""Adds an alias for the trackingId
        Adds an alias for the trackingId. Must be unique within account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aliases/v2/{trackingId}/{type}/{externalId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAliasesV2TrackingIDTypeExternalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAliasesV2TrackingIDTypeExternalID400ApplicationJSON])
                res.put_aliases_v2_tracking_id_type_external_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAliasesV2TrackingIDTypeExternalID401ApplicationJSON])
                res.put_aliases_v2_tracking_id_type_external_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAliasesV2TrackingIDTypeExternalID403ApplicationJSON])
                res.put_aliases_v2_tracking_id_type_external_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAliasesV2TrackingIDTypeExternalID404ApplicationJSON])
                res.put_aliases_v2_tracking_id_type_external_id_404_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAliasesV2TrackingIDTypeExternalID409ApplicationJSON])
                res.put_aliases_v2_tracking_id_type_external_id_409_application_json_object = out

        return res

    