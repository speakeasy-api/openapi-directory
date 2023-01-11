import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBenefitsDocumentUploadDownloadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadDownloadSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadDownload401ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadDownload403ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadDownload404ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadDownload429ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadDownload500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadDownloadRequest:
    path_params: GetBenefitsDocumentUploadDownloadPathParams = dataclasses.field()
    security: GetBenefitsDocumentUploadDownloadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_benefits_document_upload_download_200_application_zip_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_benefits_document_upload_download_401_application_json_object: Optional[GetBenefitsDocumentUploadDownload401ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_download_403_application_json_object: Optional[GetBenefitsDocumentUploadDownload403ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_download_404_application_json_object: Optional[GetBenefitsDocumentUploadDownload404ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_download_429_application_json_object: Optional[GetBenefitsDocumentUploadDownload429ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_download_500_application_json_object: Optional[GetBenefitsDocumentUploadDownload500ApplicationJSON] = dataclasses.field(default=None)
    
