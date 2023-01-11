import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import actionfunctionidentifier as shared_actionfunctionidentifier

class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclasses.dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplacePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    function_type: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest:
    path_params: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplacePathParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'text/plain' }})
    security: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_function_identifier: Optional[shared_actionfunctionidentifier.ActionFunctionIdentifier] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
