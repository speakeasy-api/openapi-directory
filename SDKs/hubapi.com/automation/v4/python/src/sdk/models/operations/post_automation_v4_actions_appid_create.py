import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import extensionactiondefinitioninput as shared_extensionactiondefinitioninput
from ..shared import extensionactiondefinition as shared_extensionactiondefinition


@dataclasses.dataclass
class PostAutomationV4ActionsAppIDCreatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAutomationV4ActionsAppIDCreateSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostAutomationV4ActionsAppIDCreateRequest:
    path_params: PostAutomationV4ActionsAppIDCreatePathParams = dataclasses.field()
    request: shared_extensionactiondefinitioninput.ExtensionActionDefinitionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsAppIDCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAutomationV4ActionsAppIDCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    extension_action_definition: Optional[shared_extensionactiondefinition.ExtensionActionDefinition] = dataclasses.field(default=None)
    
