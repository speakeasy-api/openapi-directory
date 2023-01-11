import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_package_type_by_id_response_body as shared_get_package_type_by_id_response_body


@dataclasses.dataclass
class GetPackageTypeByIDPathParams:
    package_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPackageTypeByIDRequest:
    path_params: GetPackageTypeByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPackageTypeByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_package_type_by_id_response_body: Optional[shared_get_package_type_by_id_response_body.GetPackageTypeByIDResponseBody] = dataclasses.field(default=None)
    
