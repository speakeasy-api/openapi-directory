import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class BrandingPolicies:
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

    
    def create_organization_branding_policy(self, request: operations.CreateOrganizationBrandingPolicyRequest) -> operations.CreateOrganizationBrandingPolicyResponse:
        r"""Add a new branding policy to an organization
        Add a new branding policy to an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_branding_policy_201_application_json_object = out

        return res

    
    def delete_organization_branding_policy(self, request: operations.DeleteOrganizationBrandingPolicyRequest) -> operations.DeleteOrganizationBrandingPolicyResponse:
        r"""Delete a branding policy
        Delete a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_organization_branding_policies(self, request: operations.GetOrganizationBrandingPoliciesRequest) -> operations.GetOrganizationBrandingPoliciesResponse:
        r"""List the branding policies of an organization
        List the branding policies of an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_200_application_json_object = out

        return res

    
    def get_organization_branding_policies_priorities(self, request: operations.GetOrganizationBrandingPoliciesPrioritiesRequest) -> operations.GetOrganizationBrandingPoliciesPrioritiesResponse:
        r"""Return the branding policy IDs of an organization in priority order
        Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    def get_organization_branding_policy(self, request: operations.GetOrganizationBrandingPolicyRequest) -> operations.GetOrganizationBrandingPolicyResponse:
        r"""Return a branding policy
        Return a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policy_200_application_json_object = out

        return res

    
    def update_organization_branding_policies_priorities(self, request: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest) -> operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse:
        r"""Update the priority ordering of an organization's branding policies.
        Update the priority ordering of an organization's branding policies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    def update_organization_branding_policy(self, request: operations.UpdateOrganizationBrandingPolicyRequest) -> operations.UpdateOrganizationBrandingPolicyResponse:
        r"""Update a branding policy
        Update a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policy_200_application_json_object = out

        return res

    