import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionresponseactionrevisionforwardpaging as shared_collectionresponseactionrevisionforwardpaging


@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPagePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPagePathParams = dataclasses.field()
    query_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageQueryParams = dataclasses.field()
    security: GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    collection_response_action_revision_forward_paging: Optional[shared_collectionresponseactionrevisionforwardpaging.CollectionResponseActionRevisionForwardPaging] = dataclasses.field(default=None)
    
