import dataclasses
from typing import Optional
from ..shared import transformdefinition as shared_transformdefinition
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutTransformDefinitionPathParams:
    transform_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutTransformDefinitionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutTransformDefinitionRequest:
    headers: PutTransformDefinitionHeaders = dataclasses.field()
    path_params: PutTransformDefinitionPathParams = dataclasses.field()
    request: shared_transformdefinition.TransformDefinition = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutTransformDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    transform_definition: Optional[shared_transformdefinition.TransformDefinition] = dataclasses.field(default=None)
    
