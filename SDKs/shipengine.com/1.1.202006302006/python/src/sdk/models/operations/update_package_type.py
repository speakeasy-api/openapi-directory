import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import update_package_type_request_body as shared_update_package_type_request_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class UpdatePackageTypePathParams:
    package_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePackageTypeRequest:
    path_params: UpdatePackageTypePathParams = dataclasses.field()
    request: shared_update_package_type_request_body.UpdatePackageTypeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePackageTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
