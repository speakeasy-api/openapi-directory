import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ExtractPagesV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class ExtractPagesV1RequestBody:
    file: ExtractPagesV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    first_page: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'first_page' }})
    last_page: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'last_page' }})
    

@dataclass_json
@dataclasses.dataclass
class ExtractPagesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class ExtractPagesV1Request:
    request: ExtractPagesV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ExtractPagesV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    extract_pages_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    extract_pages_v1_4_xx_application_problem_plus_json_object: Optional[ExtractPagesV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
