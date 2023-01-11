import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatus401ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatus403ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatus404ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatus429ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatus500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusRequest:
    path_params: GetBenefitsDocumentUploadStatusPathParams = dataclasses.field()
    security: GetBenefitsDocumentUploadStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_benefits_document_upload_status_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_benefits_document_upload_status_401_application_json_object: Optional[GetBenefitsDocumentUploadStatus401ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_403_application_json_object: Optional[GetBenefitsDocumentUploadStatus403ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_404_application_json_object: Optional[GetBenefitsDocumentUploadStatus404ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_429_application_json_object: Optional[GetBenefitsDocumentUploadStatus429ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_500_application_json_object: Optional[GetBenefitsDocumentUploadStatus500ApplicationJSON] = dataclasses.field(default=None)
    
