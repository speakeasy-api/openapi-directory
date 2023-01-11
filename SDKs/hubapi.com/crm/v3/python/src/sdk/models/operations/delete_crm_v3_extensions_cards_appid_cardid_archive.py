import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest:
    path_params: DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams = dataclasses.field()
    security: DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
