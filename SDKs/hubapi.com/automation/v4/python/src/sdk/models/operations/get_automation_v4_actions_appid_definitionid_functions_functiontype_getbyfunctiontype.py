import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import actionfunction as shared_actionfunction

class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_type: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypePathParams = dataclasses.field()
    security: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_function: Optional[shared_actionfunction.ActionFunction] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
