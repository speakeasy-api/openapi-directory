import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import actionrevision as shared_actionrevision


@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    revision_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'revisionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams = dataclasses.field()
    security: GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_revision: Optional[shared_actionrevision.ActionRevision] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
