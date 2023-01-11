import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RemovePasswordV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class RemovePasswordV1RequestBody:
    file: RemovePasswordV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'password' }})
    

@dataclass_json
@dataclasses.dataclass
class RemovePasswordV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RemovePasswordV1Request:
    request: RemovePasswordV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class RemovePasswordV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    remove_password_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    remove_password_v1_4_xx_application_problem_plus_json_object: Optional[RemovePasswordV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
