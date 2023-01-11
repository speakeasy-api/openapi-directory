import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import transformdefinition as shared_transformdefinition


@dataclasses.dataclass
class GetTransformDefinitionFromApplicationPathParams:
    transform_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransformDefinitionFromApplicationHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransformDefinitionFromApplicationRequest:
    headers: GetTransformDefinitionFromApplicationHeaders = dataclasses.field()
    path_params: GetTransformDefinitionFromApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransformDefinitionFromApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    transform_definition: Optional[shared_transformdefinition.TransformDefinition] = dataclasses.field(default=None)
    
