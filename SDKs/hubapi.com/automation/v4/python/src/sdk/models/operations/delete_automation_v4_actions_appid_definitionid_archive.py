import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest:
    path_params: DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams = dataclasses.field()
    security: DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
