import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import extensionactiondefinition as shared_extensionactiondefinition


@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams:
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams = dataclasses.field()
    query_params: GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams = dataclasses.field()
    security: GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    extension_action_definition: Optional[shared_extensionactiondefinition.ExtensionActionDefinition] = dataclasses.field(default=None)
    
