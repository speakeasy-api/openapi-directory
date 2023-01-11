import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteTransformDefinitionPathParams:
    transform_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTransformDefinitionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTransformDefinitionRequest:
    headers: DeleteTransformDefinitionHeaders = dataclasses.field()
    path_params: DeleteTransformDefinitionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTransformDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
