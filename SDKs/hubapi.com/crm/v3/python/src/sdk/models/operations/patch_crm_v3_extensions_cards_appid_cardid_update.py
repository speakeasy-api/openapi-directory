import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import cardpatchrequest as shared_cardpatchrequest
from ..shared import cardresponse as shared_cardresponse


@dataclasses.dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateRequest:
    path_params: PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams = dataclasses.field()
    request: shared_cardpatchrequest.CardPatchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    card_response: Optional[shared_cardresponse.CardResponse] = dataclasses.field(default=None)
    
