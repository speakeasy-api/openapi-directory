import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum(str, Enum):
    AES_128 = "AES-128"
    AES_256 = "AES-256"


@dataclasses.dataclass
class AddRestrictionsV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class AddRestrictionsV1RequestBody:
    file: AddRestrictionsV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    owner_password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'owner_password' }})
    allow_accessibility: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_accessibility' }})
    allow_assemble_document: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_assemble_document' }})
    allow_change_content: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_change_content' }})
    allow_comment_and_fill_form: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_comment_and_fill_form' }})
    allow_copy_content: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_copy_content' }})
    allow_fill_form: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_fill_form' }})
    allow_print: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_print' }})
    allow_print_high_resolution: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_print_high_resolution' }})
    encryption_algorithm: Optional[AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'encryption_algorithm' }})
    user_password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_password' }})
    

@dataclass_json
@dataclasses.dataclass
class AddRestrictionsV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddRestrictionsV1Request:
    request: AddRestrictionsV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddRestrictionsV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_restrictions_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    add_restrictions_v1_4_xx_application_problem_plus_json_object: Optional[AddRestrictionsV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
