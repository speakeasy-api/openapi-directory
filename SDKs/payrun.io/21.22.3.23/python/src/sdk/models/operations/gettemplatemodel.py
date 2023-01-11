import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetTemplateModelPathParams:
    dto_data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DtoDataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTemplateModelHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTemplateModelRequest:
    headers: GetTemplateModelHeaders = dataclasses.field()
    path_params: GetTemplateModelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTemplateModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_template_model_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
