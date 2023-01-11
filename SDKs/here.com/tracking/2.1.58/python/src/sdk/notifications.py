import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Notifications:
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

    
    def delete_notifications_v2_registration_channel_name_(self, request: operations.DeleteNotificationsV2RegistrationChannelNameRequest) -> operations.DeleteNotificationsV2RegistrationChannelNameResponse:
        r"""Unregisters from notifications
        Unregister from notifications for the specified channel.
        
        The only channel name currently supported is 'webhook' for webhook notifications
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/v2/registration/{channelName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNotificationsV2RegistrationChannelNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV2RegistrationChannelName200ApplicationJSON])
                res.delete_notifications_v2_registration_channel_name_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV2RegistrationChannelName400ApplicationJSON])
                res.delete_notifications_v2_registration_channel_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV2RegistrationChannelName401ApplicationJSON])
                res.delete_notifications_v2_registration_channel_name_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV2RegistrationChannelName403ApplicationJSON])
                res.delete_notifications_v2_registration_channel_name_403_application_json_object = out

        return res

    
    def delete_notifications_v3_registration_channel_id_(self, request: operations.DeleteNotificationsV3RegistrationChannelIDRequest) -> operations.DeleteNotificationsV3RegistrationChannelIDResponse:
        r"""Unregisters from notifications
        Unregister from notifications for the specified channel ID.
        
        The only channel name currently supported is 'webhook' for webhook notifications
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/v3/registration/{channelId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNotificationsV3RegistrationChannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3RegistrationChannelID400ApplicationJSON])
                res.delete_notifications_v3_registration_channel_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3RegistrationChannelID401ApplicationJSON])
                res.delete_notifications_v3_registration_channel_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3RegistrationChannelID403ApplicationJSON])
                res.delete_notifications_v3_registration_channel_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3RegistrationChannelID404ApplicationJSON])
                res.delete_notifications_v3_registration_channel_id_404_application_json_object = out

        return res

    
    def delete_notifications_v3_registrations(self, request: operations.DeleteNotificationsV3RegistrationsRequest) -> operations.DeleteNotificationsV3RegistrationsResponse:
        r"""Unregisters all notifications
        Unregister all notifications.
        
        As an extra safety measure, you must also supply the header `x-confirm`
        with the value `true`. If this header is not explicitly specified on a
        **Delete All** request, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v3/registrations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNotificationsV3RegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3Registrations400ApplicationJSON])
                res.delete_notifications_v3_registrations_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3Registrations401ApplicationJSON])
                res.delete_notifications_v3_registrations_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNotificationsV3Registrations403ApplicationJSON])
                res.delete_notifications_v3_registrations_403_application_json_object = out

        return res

    
    def get_notifications_v2_health(self) -> operations.GetNotificationsV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV2Health200ApplicationJSON])
                res.get_notifications_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_notifications_v2_registrations(self, request: operations.GetNotificationsV2RegistrationsRequest) -> operations.GetNotificationsV2RegistrationsResponse:
        r"""Gets all registered notification channels
        Gets a list of all previously registered notification channels.
        
        The responded channel name(s) will be 'webhook' if a webhook URL has been registered
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v2/registrations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV2RegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV2Registrations200ApplicationJSON])
                res.get_notifications_v2_registrations_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV2Registrations400ApplicationJSON])
                res.get_notifications_v2_registrations_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV2Registrations401ApplicationJSON])
                res.get_notifications_v2_registrations_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV2Registrations403ApplicationJSON])
                res.get_notifications_v2_registrations_403_application_json_object = out

        return res

    
    def get_notifications_v2_version(self) -> operations.GetNotificationsV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_notifications_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_notifications_v3_health(self) -> operations.GetNotificationsV3HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v3/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV3HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3Health200ApplicationJSON])
                res.get_notifications_v3_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_notifications_v3_registration_channel_id_(self, request: operations.GetNotificationsV3RegistrationChannelIDRequest) -> operations.GetNotificationsV3RegistrationChannelIDResponse:
        r"""Gets a single notification channel information
        Provides the details of a notification channel for specified channel ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/v3/registration/{channelId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV3RegistrationChannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3RegistrationChannelID200ApplicationJSON])
                res.get_notifications_v3_registration_channel_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3RegistrationChannelID400ApplicationJSON])
                res.get_notifications_v3_registration_channel_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3RegistrationChannelID401ApplicationJSON])
                res.get_notifications_v3_registration_channel_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3RegistrationChannelID403ApplicationJSON])
                res.get_notifications_v3_registration_channel_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3RegistrationChannelID404ApplicationJSON])
                res.get_notifications_v3_registration_channel_id_404_application_json_object = out

        return res

    
    def get_notifications_v3_registrations(self, request: operations.GetNotificationsV3RegistrationsRequest) -> operations.GetNotificationsV3RegistrationsResponse:
        r"""Gets all registered notification channels
        Gets a list of all previously registered notification channels.
        
        The responded channel name(s) will be 'webhook' if a webhook URL has been registered
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v3/registrations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV3RegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3Registrations200ApplicationJSON])
                res.get_notifications_v3_registrations_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3Registrations400ApplicationJSON])
                res.get_notifications_v3_registrations_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3Registrations401ApplicationJSON])
                res.get_notifications_v3_registrations_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsV3Registrations403ApplicationJSON])
                res.get_notifications_v3_registrations_403_application_json_object = out

        return res

    
    def get_notifications_v3_version(self) -> operations.GetNotificationsV3VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v3/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsV3VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_notifications_v3_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_notifications_v2_register(self, request: operations.PostNotificationsV2RegisterRequest) -> operations.PostNotificationsV2RegisterResponse:
        r"""Registers for notifications
        Registers users for notifications when a device geofence event occurs, for example, device
        goes into or out of a geofence.
        
        The input data can be only the following:
          * A URL to receive webhook notifications
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v2/register"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNotificationsV2RegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV2Register200ApplicationJSON])
                res.post_notifications_v2_register_200_application_json_object = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV2Register201ApplicationJSON])
                res.post_notifications_v2_register_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV2Register400ApplicationJSON])
                res.post_notifications_v2_register_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV2Register401ApplicationJSON])
                res.post_notifications_v2_register_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV2Register403ApplicationJSON])
                res.post_notifications_v2_register_403_application_json_object = out

        return res

    
    def post_notifications_v3_registrations(self, request: operations.PostNotificationsV3RegistrationsRequest) -> operations.PostNotificationsV3RegistrationsResponse:
        r"""Registers for notifications
        Registers users for device event notifications.
        
        The input data can be only the following:
            * A URL to receive webhook notifications
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/v3/registrations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNotificationsV3RegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV3Registrations201ApplicationJSON])
                res.post_notifications_v3_registrations_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV3Registrations400ApplicationJSON])
                res.post_notifications_v3_registrations_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV3Registrations401ApplicationJSON])
                res.post_notifications_v3_registrations_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNotificationsV3Registrations403ApplicationJSON])
                res.post_notifications_v3_registrations_403_application_json_object = out

        return res

    
    def put_notifications_v3_registration_channel_id_(self, request: operations.PutNotificationsV3RegistrationChannelIDRequest) -> operations.PutNotificationsV3RegistrationChannelIDResponse:
        r"""Updates a notification channel registration
        Update the notification channel for specified channel ID,
        the response provides updated registration details.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/v3/registration/{channelId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutNotificationsV3RegistrationChannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsV3RegistrationChannelID200ApplicationJSON])
                res.put_notifications_v3_registration_channel_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsV3RegistrationChannelID400ApplicationJSON])
                res.put_notifications_v3_registration_channel_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsV3RegistrationChannelID401ApplicationJSON])
                res.put_notifications_v3_registration_channel_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsV3RegistrationChannelID403ApplicationJSON])
                res.put_notifications_v3_registration_channel_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsV3RegistrationChannelID404ApplicationJSON])
                res.put_notifications_v3_registration_channel_id_404_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsV3RegistrationChannelID409ApplicationJSON])
                res.put_notifications_v3_registration_channel_id_409_application_json_object = out

        return res

    