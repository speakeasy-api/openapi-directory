import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetSchemaPathParams:
    dto_data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DtoDataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSchemaHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSchemaRequest:
    headers: GetSchemaHeaders = dataclasses.field()
    path_params: GetSchemaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_schema_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
