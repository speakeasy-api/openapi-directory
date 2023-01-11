import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cardlistresponse as shared_cardlistresponse


@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllRequest:
    path_params: GetCrmV3ExtensionsCardsAppIDGetAllPathParams = dataclasses.field()
    security: GetCrmV3ExtensionsCardsAppIDGetAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    card_list_response: Optional[shared_cardlistresponse.CardListResponse] = dataclasses.field(default=None)
    
