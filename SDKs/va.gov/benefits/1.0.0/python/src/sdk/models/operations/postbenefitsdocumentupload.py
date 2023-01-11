import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostBenefitsDocumentUploadSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostBenefitsDocumentUpload202ApplicationJSON:
    data: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBenefitsDocumentUpload401ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBenefitsDocumentUpload403ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBenefitsDocumentUpload422ApplicationJSON:
    errors: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBenefitsDocumentUpload429ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBenefitsDocumentUpload500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class PostBenefitsDocumentUploadRequest:
    security: PostBenefitsDocumentUploadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostBenefitsDocumentUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_benefits_document_upload_202_application_json_object: Optional[PostBenefitsDocumentUpload202ApplicationJSON] = dataclasses.field(default=None)
    post_benefits_document_upload_401_application_json_object: Optional[PostBenefitsDocumentUpload401ApplicationJSON] = dataclasses.field(default=None)
    post_benefits_document_upload_403_application_json_object: Optional[PostBenefitsDocumentUpload403ApplicationJSON] = dataclasses.field(default=None)
    post_benefits_document_upload_422_application_json_object: Optional[PostBenefitsDocumentUpload422ApplicationJSON] = dataclasses.field(default=None)
    post_benefits_document_upload_429_application_json_object: Optional[PostBenefitsDocumentUpload429ApplicationJSON] = dataclasses.field(default=None)
    post_benefits_document_upload_500_application_json_object: Optional[PostBenefitsDocumentUpload500ApplicationJSON] = dataclasses.field(default=None)
    
