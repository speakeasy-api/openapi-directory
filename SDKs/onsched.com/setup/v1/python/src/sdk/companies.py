import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Companies:
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

    
    def delete_setup_v1_companies_domains_id_(self, request: operations.DeleteSetupV1CompaniesDomainsIDRequest) -> operations.DeleteSetupV1CompaniesDomainsIDResponse:
        r"""Deletes a whitelisted domain for the authorized company
        Returns view of domain deleted
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def delete_setup_v1_companies_email_templates_master(self) -> operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse:
        r"""Deletes custom master email template settings reverting to the default
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def delete_setup_v1_companies_regions_id_(self, request: operations.DeleteSetupV1CompaniesRegionsIDRequest) -> operations.DeleteSetupV1CompaniesRegionsIDResponse:
        r"""Delete a region
        Deletes a region.
        
        If the region is related to any business locations it cannot be deleted
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def get_setup_v1_companies(self) -> operations.GetSetupV1CompaniesResponse:
        r"""Returns a company profile information of the authorized company
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    def get_setup_v1_companies_domains(self) -> operations.GetSetupV1CompaniesDomainsResponse:
        r"""Returns a list of whitelisted domains for the authorized company
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/domains"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainListViewModel])
                res.company_domain_list_view_model = out

        return res

    
    def get_setup_v1_companies_domains_id_(self, request: operations.GetSetupV1CompaniesDomainsIDRequest) -> operations.GetSetupV1CompaniesDomainsIDResponse:
        r"""Returns a whitelisted domain for the authorized company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def get_setup_v1_companies_email_templates(self) -> operations.GetSetupV1CompaniesEmailTemplatesResponse:
        r"""Returns email template list from the authorized company
        Returns a list of email templates that may be customized
        If the template has been customized, the customized property is true.
        The scope parameter indicates if the email template has been customized
        at Business Location level or Company level.
        This endpoint returns only company level templates so the scope is always company
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_template_list_view_model = out

        return res

    
    def get_setup_v1_companies_email_templates_master(self) -> operations.GetSetupV1CompaniesEmailTemplatesMasterResponse:
        r"""Returns master email template settings
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def get_setup_v1_companies_email_templates_template_name_(self, request: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest) -> operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse:
        r"""Returns default or custom email template from the authorized company
        The default email template is returned when a custom template is not found
        The response content is in html format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/email/templates/{templateName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def get_setup_v1_companies_regions(self, request: operations.GetSetupV1CompaniesRegionsRequest) -> operations.GetSetupV1CompaniesRegionsResponse:
        r"""Returns a list of regions.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/regions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.region_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_companies_regions_id_(self, request: operations.GetSetupV1CompaniesRegionsIDRequest) -> operations.GetSetupV1CompaniesRegionsIDResponse:
        r"""Get a Region
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def get_setup_v1_companies_timezones_date_(self, request: operations.GetSetupV1CompaniesTimezonesDateRequest) -> operations.GetSetupV1CompaniesTimezonesDateResponse:
        r"""Returns timezone information for all supported Timezone's
        The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/timezones/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesTimezonesDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TimezoneViewModel])
                res.timezone_view_model = out

        return res

    
    def post_setup_v1_companies(self, request: operations.PostSetupV1CompaniesRequest) -> operations.PostSetupV1CompaniesResponse:
        r"""Creates a company profile.
        Use this endpoint to create a new Company Profile. 
        This endpoint is restricted by scope and limited to use by OnSched internal apps
        
        The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
        or a Microsoft Timezone e.g. Eastern Standard Time
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    def post_setup_v1_companies_domains(self, request: operations.PostSetupV1CompaniesDomainsRequest) -> operations.PostSetupV1CompaniesDomainsResponse:
        r"""Creates a whitelisted domain for the authorized company
        Returns view of domain created
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/domains"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def post_setup_v1_companies_email_templates_master(self, request: operations.PostSetupV1CompaniesEmailTemplatesMasterRequest) -> operations.PostSetupV1CompaniesEmailTemplatesMasterResponse:
        r"""Updates / creates custom master email template settings
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def post_setup_v1_companies_regions(self, request: operations.PostSetupV1CompaniesRegionsRequest) -> operations.PostSetupV1CompaniesRegionsResponse:
        r"""Create a new region
        Creates a new region.
        
        Regions can be mapped to business locations. Locations can be filtered by region id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/regions"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def put_setup_v1_companies(self, request: operations.PutSetupV1CompaniesRequest) -> operations.PutSetupV1CompaniesResponse:
        r"""Updates a company object.
        Use this endpoint to update the authorized company. 
        
        Your client credentials resolve to a single company.
        
        The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
        or a Microsoft Timezone e.g. Eastern Standard Time
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    def put_setup_v1_companies_domains_id_(self, request: operations.PutSetupV1CompaniesDomainsIDRequest) -> operations.PutSetupV1CompaniesDomainsIDResponse:
        r"""Updates a whitelisted domain for the authorized company
        Returns view of domain updated
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def put_setup_v1_companies_regions_id_(self, request: operations.PutSetupV1CompaniesRegionsIDRequest) -> operations.PutSetupV1CompaniesRegionsIDResponse:
        r"""Update a region
        Updates a region.
        
        Regions can be mapped to business locations. Locations can be filtered by region id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    