import dataclasses



@dataclasses.dataclass
class DeleteWebhookInstancePathParams:
    guid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhookInstanceRequest:
    path_params: DeleteWebhookInstancePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhookInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
