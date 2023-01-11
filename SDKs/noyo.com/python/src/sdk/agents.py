import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Agents:
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

    
    def create_agent_contact(self, request: operations.CreateAgentContactRequest) -> operations.CreateAgentContactResponse:
        r"""Create new Agent Contact
        Creates a new agent contact for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/contacts", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAgentContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentContactResult])
                res.agent_contact_result = out

        return res

    
    def create_agent_location(self, request: operations.CreateAgentLocationRequest) -> operations.CreateAgentLocationResponse:
        r"""Create new Agent Location
        Creates a new agent location for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/locations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAgentLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentLocationResult])
                res.agent_location_result = out

        return res

    
    def create_application_agent(self, request: operations.CreateApplicationAgentRequest) -> operations.CreateApplicationAgentResponse:
        r"""Create new Agent
        Create a new agent for a group application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/agents", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateApplicationAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentResult])
                res.agent_result = out

        return res

    
    def edit_agent(self, request: operations.EditAgentRequest) -> operations.EditAgentResponse:
        r"""Edit an Agent
        Edit an agent based on the ID provided. The version parameter must match the latest agent version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentResult])
                res.agent_result = out

        return res

    
    def edit_agent_contact(self, request: operations.EditAgentContactRequest) -> operations.EditAgentContactResponse:
        r"""Edit an Agent Contact
        Edit an agent contact based on the ID provided. The version parameter must match the latest agent contact version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/contacts/{contact_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditAgentContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentContactResult])
                res.agent_contact_result = out

        return res

    
    def edit_agent_location(self, request: operations.EditAgentLocationRequest) -> operations.EditAgentLocationResponse:
        r"""Edit an Agent Location
        Edit an agent location based on the ID provided. The version parameter must match the latest agent location version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/locations/{location_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditAgentLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentLocationResult])
                res.agent_location_result = out

        return res

    
    def get_agent(self, request: operations.GetAgentRequest) -> operations.GetAgentResponse:
        r"""Get Agent
        Returns the latest version of a single agent based on the ID provided
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentResult])
                res.agent_result = out

        return res

    
    def get_agent_contact(self, request: operations.GetAgentContactRequest) -> operations.GetAgentContactResponse:
        r"""Get Agent
        Returns the latest version of a single agent based on the ID provided
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/contacts/{contact_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentContactResult])
                res.agent_contact_result = out

        return res

    
    def get_agent_contacts(self, request: operations.GetAgentContactsRequest) -> operations.GetAgentContactsResponse:
        r"""Get Agent Contacts
        Returns a list of all contacts for the given agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/contacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedAgentContactResults])
                res.paginated_agent_contact_results = out

        return res

    
    def get_agent_location(self, request: operations.GetAgentLocationRequest) -> operations.GetAgentLocationResponse:
        r"""Get Agent
        Returns the latest version of a single agent based on the ID provided
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/locations/{location_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgentLocationResult])
                res.agent_location_result = out

        return res

    
    def get_agent_locations(self, request: operations.GetAgentLocationsRequest) -> operations.GetAgentLocationsResponse:
        r"""Get Agent Locations
        Returns a list of all locations for the given agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/agents/{agent_id}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedAgentLocationResult])
                res.paginated_agent_location_result = out

        return res

    
    def get_application_agents(self, request: operations.GetApplicationAgentsRequest) -> operations.GetApplicationAgentsResponse:
        r"""Get Application Agents
        Returns a list of all agents for the given application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/agents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedAgentResult])
                res.paginated_agent_result = out

        return res

    