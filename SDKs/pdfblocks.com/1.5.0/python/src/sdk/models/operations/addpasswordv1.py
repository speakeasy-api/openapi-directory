import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddPasswordV1RequestBodyEncryptionAlgorithmEnum(str, Enum):
    AES_128 = "AES-128"
    AES_256 = "AES-256"


@dataclasses.dataclass
class AddPasswordV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class AddPasswordV1RequestBody:
    file: AddPasswordV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'password' }})
    encryption_algorithm: Optional[AddPasswordV1RequestBodyEncryptionAlgorithmEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'encryption_algorithm' }})
    

@dataclass_json
@dataclasses.dataclass
class AddPasswordV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddPasswordV1Request:
    request: AddPasswordV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddPasswordV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_password_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    add_password_v1_4_xx_application_problem_plus_json_object: Optional[AddPasswordV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
