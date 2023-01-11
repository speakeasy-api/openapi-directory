import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import extensionactiondefinitionpatch as shared_extensionactiondefinitionpatch
from ..shared import extensionactiondefinition as shared_extensionactiondefinition


@dataclasses.dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateRequest:
    path_params: PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams = dataclasses.field()
    request: shared_extensionactiondefinitionpatch.ExtensionActionDefinitionPatch = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    extension_action_definition: Optional[shared_extensionactiondefinition.ExtensionActionDefinition] = dataclasses.field(default=None)
    
