import dataclasses



@dataclasses.dataclass
class DeleteNetworkPiiRequestPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    request_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkPiiRequestRequest:
    path_params: DeleteNetworkPiiRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkPiiRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
