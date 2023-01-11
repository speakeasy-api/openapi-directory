import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def delete_setup_v1_locations_services_id_(self, request: operations.DeleteSetupV1LocationsServicesIDRequest) -> operations.DeleteSetupV1LocationsServicesIDResponse:
        r"""Deletes a location service from the specified location
        Use this endpoint to delete a location service for a location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_locations_id_(self, request: operations.DeleteSetupV1LocationsIDRequest) -> operations.DeleteSetupV1LocationsIDResponse:
        r"""Deletes a location object.
        Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_locations_id_deleteallimages(self, request: operations.DeleteSetupV1LocationsIDDeleteallimagesRequest) -> operations.DeleteSetupV1LocationsIDDeleteallimagesResponse:
        r"""Deletes all images from location blob storage container
        An option exists to use upper case for matching the subdirectory name
        Legacy apps stored pics using upper case externalId. Api uses lower case names.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/deleteallimages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDDeleteallimagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.delete_setup_v1_locations_id_deleteallimages_200_application_json_boolean = out

        return res

    
    def delete_setup_v1_locations_id_deleteimage(self, request: operations.DeleteSetupV1LocationsIDDeleteimageRequest) -> operations.DeleteSetupV1LocationsIDDeleteimageResponse:
        r"""Removes a location image
        Use this endpoint to delete a previously uploaded location image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/deleteimage", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_locations_id_email_templates_master(self, request: operations.DeleteSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse:
        r"""Deletes custom master email template settings reverting to the default
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def delete_setup_v1_locations_id_email_templates_template_name_(self, request: operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest) -> operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
        r"""Deletes a custom email template
        Use this endpoint to remove a custom email template. 
        
        Custom email templates created in the primary location are company scope and inherited by all locations
        unless overriden in a location. Templates created in any location other than the primary apply to that location only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/{templateName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def delete_setup_v1_locations_id_google_service_account(self, request: operations.DeleteSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse:
        r"""Remove authorized access to all google calendar users in an organization
        Use this endpoint to remove authorized access to all google calendar users.
        Calendars will no longer be synced for resources
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_setup_v1_locations_id_services(self, request: operations.DeleteSetupV1LocationsIDServicesRequest) -> operations.DeleteSetupV1LocationsIDServicesResponse:
        r"""Deletes all location services from the specified location
        Use this endpoint to delete all location services for a location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def get_setup_v1_locations(self, request: operations.GetSetupV1LocationsRequest) -> operations.GetSetupV1LocationsResponse:
        r"""Returns a list of business locations.
        Use this api end point if you have multiple business locations in your company.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.location_list_view_model = out

        return res

    
    def get_setup_v1_locations_services_id_(self, request: operations.GetSetupV1LocationsServicesIDRequest) -> operations.GetSetupV1LocationsServicesIDResponse:
        r"""Returns a single location services.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessServiceViewModel])
                res.business_service_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_locations_id_(self, request: operations.GetSetupV1LocationsIDRequest) -> operations.GetSetupV1LocationsIDResponse:
        r"""Returns a business location object.
        The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def get_setup_v1_locations_id_email_templates(self, request: operations.GetSetupV1LocationsIDEmailTemplatesRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesResponse:
        r"""Returns email template list from the authorized company
        Returns a list of email templates that may be customized
        If the template has been customized, the customized property is true.
        The scope parameter indicates if the email template has been customized
        at Business Location level or Company level.
        Only when querying the primary business location will company scope
        customized templates display. Otherwise, the scope shows if a template has been customized
        at the business location level.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_template_list_view_model = out

        return res

    
    def get_setup_v1_locations_id_email_templates_master(self, request: operations.GetSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse:
        r"""Returns master email template settings
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def get_setup_v1_locations_id_email_templates_template_name_(self, request: operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
        r"""Returns company default or custom email template from the specified location
        These are custom email templates defined with Business Scope at a location other than the primary.
        The default email template is returned when a custom email template is not found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/{templateName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def get_setup_v1_locations_id_google_service_account(self, request: operations.GetSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.GetSetupV1LocationsIDGoogleServiceAccountResponse:
        r"""Returns google service account info
        This endpoint will not go to production. It is temporary.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleServiceAccountCreds])
                res.google_service_account_creds = out

        return res

    
    def get_setup_v1_locations_id_services(self, request: operations.GetSetupV1LocationsIDServicesRequest) -> operations.GetSetupV1LocationsIDServicesResponse:
        r"""Returns a list of location services.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_service_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_setup_v1_locations(self, request: operations.PostSetupV1LocationsRequest) -> operations.PostSetupV1LocationsResponse:
        r"""Creates a new location object.
        Use this endpoint to create a new business location.
        
        Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
        can define their own settings that override the company level settings.
        
        If you wish to update settings then pass in the settings element in the input.
        When you are working with the Primary location, then the settings will update the company level settings.
        Otherwise, the settings will update business location settings.
        
        If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/locations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def post_setup_v1_locations_bulk(self, request: operations.PostSetupV1LocationsBulkRequest) -> operations.PostSetupV1LocationsBulkResponse:
        r"""Creates new location objects.
        Use this endpoint to create new business locations. The incoming list of 
        locations cannot exceed 100 location objects for performance purposes.
        
        Each location object may consist of:
        Name: The Name of the location.
        AdminName: The Name of the location admin.
        AdminEmail: The email address of the location admin.
        TimezoneName: The IANA formatted name of the locations timezone.
        FriendlyId: A friendly id to use to refer to the location.
        Address: The physical address of the location.
        BusinessHours: The hours of operation of the location.
        Settings: Additional location options that can affect things like 
        the book ahead restrictions, customer bookings per day, etc.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/locations/bulk"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.LocationViewModel]])
                res.location_view_models = out

        return res

    
    def post_setup_v1_locations_id_email_templates(self, request: operations.PostSetupV1LocationsIDEmailTemplatesRequest) -> operations.PostSetupV1LocationsIDEmailTemplatesResponse:
        r"""Uploads a custom email template
        Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
        Updates to the primary business location create company scoped custom templates
        Updates to non primary business locations create business location scoped custom templates
        The master template cannot be updated with this endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def post_setup_v1_locations_id_email_templates_master(self, request: operations.PostSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse:
        r"""Saves settings for the master email template
        Use this endpoint to a customize the master email template settings. 
        Updates to the primary business location create company scoped master email template custom settings
        Updates to non primary business locations create business location scoped master email template custom settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def post_setup_v1_locations_id_google_service_account(self, request: operations.PostSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.PostSetupV1LocationsIDGoogleServiceAccountResponse:
        r"""Authorize access to all google calendar users in an organization
        Use this endpoint to authorize access to all google calendar users.
        You must create a Google Service account as an admin of your GSuite,
        then save credentials as a Json Key file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleServiceAccountCreds])
                res.google_service_account_creds = out

        return res

    
    def post_setup_v1_locations_id_services(self, request: operations.PostSetupV1LocationsIDServicesRequest) -> operations.PostSetupV1LocationsIDServicesResponse:
        r"""Adds location services to the specified location
        Use this endpoint to explicitly define what company scoped services
        at this location are offered. GET locations allows serviceId as a 
        search parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def post_setup_v1_locations_id_uploadimage(self, request: operations.PostSetupV1LocationsIDUploadimageRequest) -> operations.PostSetupV1LocationsIDUploadimageResponse:
        r"""Uploads a location image
        Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
        and pass that string as input along with your filename.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/uploadimage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_(self, request: operations.PutSetupV1LocationsIDRequest) -> operations.PutSetupV1LocationsIDResponse:
        r"""Use this endpoint to change the scope of online booking settings
        Use this endpoint to update a business location. 
        
        The optional removeRegion query parameter is used to remove the region relationship from the location
        
        If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
        
        If all your settings are uniform across all locations then do not pass settings and the location will use the settings
        defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
        that needs different settings by providing settings in the update model.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_holidays_holiday_id_closed_(self, request: operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest) -> operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse:
        r"""Sets a business holiday to open or closed.
        Use this endpoint to set business holidays to open or closed. 
        
        If you pass in an asterisk for the holidayId then all business holidays
        will be set to the valaue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/holidays/{holidayId}/{closed}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_recover(self, request: operations.PutSetupV1LocationsIDRecoverRequest) -> operations.PutSetupV1LocationsIDRecoverResponse:
        r"""Recovers a location object.
        Use this endpoint to recover a deleted business location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_settings_scope_settings_scope_(self, request: operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest) -> operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse:
        r"""Changes the scope of OnlineBooking Settings.
        Use this endpoint to update a business location. 
        
        settingsScope values are 0 = company scope, 1 = business location scope
        if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
        Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
        ///
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/settings/scope/{settingsScope}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    