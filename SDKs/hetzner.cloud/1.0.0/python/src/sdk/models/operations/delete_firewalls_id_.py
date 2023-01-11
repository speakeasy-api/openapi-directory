import dataclasses



@dataclasses.dataclass
class DeleteFirewallsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFirewallsIDRequest:
    path_params: DeleteFirewallsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFirewallsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
