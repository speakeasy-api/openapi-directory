import dataclasses



@dataclasses.dataclass
class DeleteWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhooksIDRequest:
    path_params: DeleteWebhooksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
