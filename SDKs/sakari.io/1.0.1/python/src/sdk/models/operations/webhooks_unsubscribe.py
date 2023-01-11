import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class WebhooksUnsubscribePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    url: str = dataclasses.field(metadata={'path_param': { 'field_name': 'url', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebhooksUnsubscribeSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebhooksUnsubscribeRequest:
    path_params: WebhooksUnsubscribePathParams = dataclasses.field()
    security: WebhooksUnsubscribeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebhooksUnsubscribeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
