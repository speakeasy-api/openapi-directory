

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils


from .servicecredential import ServiceCredential
from .servicecredentialtype import ServiceCredentialType
from .serviceinstance import ServiceInstance
from .serviceinventory import ServiceInventory
from .serviceoffering import ServiceOffering
from .serviceofferingnode import ServiceOfferingNode
from .serviceplan import ServicePlan
from .source import Source
from .tags import Tags
from .task import Task


SERVERS = [
	"https://cloud.redhat.com/{basePath}",
	"http://localhost:{port}/{basePath}",
]


class SDK:
    
    service_credential: ServiceCredential
    service_credential_type: ServiceCredentialType
    service_instance: ServiceInstance
    service_inventory: ServiceInventory
    service_offering: ServiceOffering
    service_offering_node: ServiceOfferingNode
    service_plan: ServicePlan
    source: Source
    tags: Tags
    task: Task

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_documentation(self) -> operations.GetDocumentationResponse:
        r"""Return this API document in JSON format
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/openapi.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_documentation_200_application_json_object = out

        return res

    
    def post_graph_ql(self, request: operations.PostGraphQlRequest) -> operations.PostGraphQlResponse:
        r"""Perform a GraphQL Query
        Performs a GraphQL Query
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/graphql"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGraphQlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphQlResponse])
                res.graph_ql_response = out

        return res

    