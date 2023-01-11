import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionresponseactionfunctionidentifiernopaging as shared_collectionresponseactionfunctionidentifiernopaging


@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams = dataclasses.field()
    security: GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    collection_response_action_function_identifier_no_paging: Optional[shared_collectionresponseactionfunctionidentifiernopaging.CollectionResponseActionFunctionIdentifierNoPaging] = dataclasses.field(default=None)
    
