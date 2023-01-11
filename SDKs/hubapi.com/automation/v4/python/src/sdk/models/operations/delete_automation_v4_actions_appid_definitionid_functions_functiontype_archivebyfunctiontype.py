import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security

class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_type: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeRequest:
    path_params: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypePathParams = dataclasses.field()
    security: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
