import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ReversePagesV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class ReversePagesV1RequestBody:
    file: ReversePagesV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclasses.dataclass
class ReversePagesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class ReversePagesV1Request:
    request: ReversePagesV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ReversePagesV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reverse_pages_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    reverse_pages_v1_4_xx_application_problem_plus_json_object: Optional[ReversePagesV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
