import dataclasses



@dataclasses.dataclass
class EnterpriseAdminPingGlobalWebhookPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminPingGlobalWebhookHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminPingGlobalWebhookRequest:
    headers: EnterpriseAdminPingGlobalWebhookHeaders = dataclasses.field()
    path_params: EnterpriseAdminPingGlobalWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminPingGlobalWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
