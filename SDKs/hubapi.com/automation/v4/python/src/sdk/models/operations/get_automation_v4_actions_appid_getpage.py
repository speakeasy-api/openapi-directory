import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionresponseextensionactiondefinitionforwardpaging as shared_collectionresponseextensionactiondefinitionforwardpaging


@dataclasses.dataclass
class GetAutomationV4ActionsAppIDGetPagePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDGetPageQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDGetPageSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDGetPagePathParams = dataclasses.field()
    query_params: GetAutomationV4ActionsAppIDGetPageQueryParams = dataclasses.field()
    security: GetAutomationV4ActionsAppIDGetPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDGetPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    collection_response_extension_action_definition_forward_paging: Optional[shared_collectionresponseextensionactiondefinitionforwardpaging.CollectionResponseExtensionActionDefinitionForwardPaging] = dataclasses.field(default=None)
    
