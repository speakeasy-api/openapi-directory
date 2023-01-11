import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import webhooksresponse as shared_webhooksresponse


@dataclasses.dataclass
class WebhooksFetchAllPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebhooksFetchAllSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebhooksFetchAllRequest:
    path_params: WebhooksFetchAllPathParams = dataclasses.field()
    security: WebhooksFetchAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebhooksFetchAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhooks_response: Optional[shared_webhooksresponse.WebhooksResponse] = dataclasses.field(default=None)
    
