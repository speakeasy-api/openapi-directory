import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cardcreaterequest as shared_cardcreaterequest
from ..shared import cardresponse as shared_cardresponse


@dataclasses.dataclass
class PostCrmV3ExtensionsCardsAppIDCreatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCrmV3ExtensionsCardsAppIDCreateSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostCrmV3ExtensionsCardsAppIDCreateRequest:
    path_params: PostCrmV3ExtensionsCardsAppIDCreatePathParams = dataclasses.field()
    request: shared_cardcreaterequest.CardCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostCrmV3ExtensionsCardsAppIDCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostCrmV3ExtensionsCardsAppIDCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    card_response: Optional[shared_cardresponse.CardResponse] = dataclasses.field(default=None)
    
