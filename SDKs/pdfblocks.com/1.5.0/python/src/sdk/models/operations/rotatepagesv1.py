import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RotatePagesV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class RotatePagesV1RequestBody:
    angle: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'angle' }})
    file: RotatePagesV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    first_page: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'first_page' }})
    last_page: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'last_page' }})
    

@dataclass_json
@dataclasses.dataclass
class RotatePagesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RotatePagesV1Request:
    request: RotatePagesV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class RotatePagesV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rotate_pages_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    rotate_pages_v1_4_xx_application_problem_plus_json_object: Optional[RotatePagesV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
