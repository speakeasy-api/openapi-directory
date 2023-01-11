import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cardresponse as shared_cardresponse


@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDRequest:
    path_params: GetCrmV3ExtensionsCardsAppIDCardIDGetByIDPathParams = dataclasses.field()
    security: GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    card_response: Optional[shared_cardresponse.CardResponse] = dataclasses.field(default=None)
    
