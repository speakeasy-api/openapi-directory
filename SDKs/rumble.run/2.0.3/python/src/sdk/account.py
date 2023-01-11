import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Account:
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

    
    def create_account_credential(self, request: operations.CreateAccountCredentialRequest) -> operations.CreateAccountCredentialResponse:
        r"""Create a new credential
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/credentials"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Credential])
                res.credential = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_key(self, request: operations.CreateAccountKeyRequest) -> operations.CreateAccountKeyResponse:
        r"""Create a new key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/keys"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_organization(self, request: operations.CreateAccountOrganizationRequest) -> operations.CreateAccountOrganizationResponse:
        r"""Create a new organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/orgs"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_user(self, request: operations.CreateAccountUserRequest) -> operations.CreateAccountUserResponse:
        r"""Create a new user account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_user_invite(self, request: operations.CreateAccountUserInviteRequest) -> operations.CreateAccountUserInviteResponse:
        r"""Create a new user account and send an email invite
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users/invite"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountUserInviteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_account_organization_export_token(self, request: operations.DeleteAccountOrganizationExportTokenRequest) -> operations.DeleteAccountOrganizationExportTokenResponse:
        r"""Removes the export token from the specified organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}/exportToken", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAccountOrganizationExportTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def export_events_json(self, request: operations.ExportEventsJSONRequest) -> operations.ExportEventsJSONResponse:
        r"""System event log as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/events.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportEventsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Event]])
                res.events = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_events_jsonl(self, request: operations.ExportEventsJsonlRequest) -> operations.ExportEventsJsonlResponse:
        r"""System event log as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/events.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportEventsJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Event]])
                res.events = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_agents(self, request: operations.GetAccountAgentsRequest) -> operations.GetAccountAgentsResponse:
        r"""Get all agents across all organizations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/agents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Agent]])
                res.agents = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_credential(self, request: operations.GetAccountCredentialRequest) -> operations.GetAccountCredentialResponse:
        r"""Get credential details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/credentials/{credential_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Credential])
                res.credential = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_account_credentials(self, request: operations.GetAccountCredentialsRequest) -> operations.GetAccountCredentialsResponse:
        r"""Get all account credentials
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/credentials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Credential]])
                res.credentials = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_key(self, request: operations.GetAccountKeyRequest) -> operations.GetAccountKeyResponse:
        r"""Get key details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_keys(self, request: operations.GetAccountKeysRequest) -> operations.GetAccountKeysResponse:
        r"""Get all active API keys
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/keys"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.APIKey]])
                res.api_keys = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_license(self, request: operations.GetAccountLicenseRequest) -> operations.GetAccountLicenseResponse:
        r"""Get license details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/license"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_organization(self, request: operations.GetAccountOrganizationRequest) -> operations.GetAccountOrganizationResponse:
        r"""Get organization details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_organizations(self, request: operations.GetAccountOrganizationsRequest) -> operations.GetAccountOrganizationsResponse:
        r"""Get all organization details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/orgs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Organization]])
                res.organizations = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_sites(self, request: operations.GetAccountSitesRequest) -> operations.GetAccountSitesResponse:
        r"""Get all sites details across all organizations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/sites"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Site]])
                res.sites = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_tasks(self, request: operations.GetAccountTasksRequest) -> operations.GetAccountTasksResponse:
        r"""Get all task details across all organizations (up to 1000)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Task]])
                res.tasks = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_user(self, request: operations.GetAccountUserRequest) -> operations.GetAccountUserResponse:
        r"""Get user details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_users(self, request: operations.GetAccountUsersRequest) -> operations.GetAccountUsersResponse:
        r"""Get all users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.User]])
                res.users = out
        elif r.status_code == 401:
            pass

        return res

    
    def remove_account_credential(self, request: operations.RemoveAccountCredentialRequest) -> operations.RemoveAccountCredentialResponse:
        r"""Remove this credential
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/credentials/{credential_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_account_key(self, request: operations.RemoveAccountKeyRequest) -> operations.RemoveAccountKeyResponse:
        r"""Remove this key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_account_organization(self, request: operations.RemoveAccountOrganizationRequest) -> operations.RemoveAccountOrganizationResponse:
        r"""Remove this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_account_user(self, request: operations.RemoveAccountUserRequest) -> operations.RemoveAccountUserResponse:
        r"""Remove this user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def reset_account_user_lockout(self, request: operations.ResetAccountUserLockoutRequest) -> operations.ResetAccountUserLockoutResponse:
        r"""Resets the user's lockout status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}/resetLockout", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAccountUserLockoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def reset_account_user_mfa(self, request: operations.ResetAccountUserMfaRequest) -> operations.ResetAccountUserMfaResponse:
        r"""Resets the user's MFA tokens
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}/resetMFA", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAccountUserMfaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def reset_account_user_password(self, request: operations.ResetAccountUserPasswordRequest) -> operations.ResetAccountUserPasswordResponse:
        r"""Sends the user a password reset email
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}/resetPassword", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAccountUserPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def rotate_account_key(self, request: operations.RotateAccountKeyRequest) -> operations.RotateAccountKeyResponse:
        r"""Rotates the key secret
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/keys/{key_id}/rotate", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RotateAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass

        return res

    
    def rotate_account_organization_export_token(self, request: operations.RotateAccountOrganizationExportTokenRequest) -> operations.RotateAccountOrganizationExportTokenResponse:
        r"""Rotates the organization export token and returns the updated organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}/exportToken/rotate", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RotateAccountOrganizationExportTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def update_account_organization(self, request: operations.UpdateAccountOrganizationRequest) -> operations.UpdateAccountOrganizationResponse:
        r"""Update organization details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def update_account_user(self, request: operations.UpdateAccountUserRequest) -> operations.UpdateAccountUserResponse:
        r"""Update a user's details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    