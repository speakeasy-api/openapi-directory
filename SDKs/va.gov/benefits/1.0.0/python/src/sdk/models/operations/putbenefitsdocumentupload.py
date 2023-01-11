import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutBenefitsDocumentUploadHeaders:
    content_md5: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-MD5', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutBenefitsDocumentUpload401ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutBenefitsDocumentUpload422ApplicationJSON:
    errors: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutBenefitsDocumentUpload429ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutBenefitsDocumentUpload500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class PutBenefitsDocumentUploadRequest:
    headers: PutBenefitsDocumentUploadHeaders = dataclasses.field()
    

@dataclasses.dataclass
class PutBenefitsDocumentUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    put_benefits_document_upload_401_application_json_object: Optional[PutBenefitsDocumentUpload401ApplicationJSON] = dataclasses.field(default=None)
    put_benefits_document_upload_422_application_json_object: Optional[PutBenefitsDocumentUpload422ApplicationJSON] = dataclasses.field(default=None)
    put_benefits_document_upload_429_application_json_object: Optional[PutBenefitsDocumentUpload429ApplicationJSON] = dataclasses.field(default=None)
    put_benefits_document_upload_500_application_json_object: Optional[PutBenefitsDocumentUpload500ApplicationJSON] = dataclasses.field(default=None)
    
