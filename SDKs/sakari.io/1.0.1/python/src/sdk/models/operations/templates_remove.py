import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class TemplatesRemovePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TemplatesRemoveSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TemplatesRemove200ApplicationJSON:
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class TemplatesRemoveRequest:
    path_params: TemplatesRemovePathParams = dataclasses.field()
    security: TemplatesRemoveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TemplatesRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    templates_remove_200_application_json_object: Optional[TemplatesRemove200ApplicationJSON] = dataclasses.field(default=None)
    
