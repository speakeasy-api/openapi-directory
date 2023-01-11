import dataclasses



@dataclasses.dataclass
class DeleteNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkWebhooksHTTPServerRequest:
    path_params: DeleteNetworkWebhooksHTTPServerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkWebhooksHTTPServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
