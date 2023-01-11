import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import documentuploadstatusguidlist as shared_documentuploadstatusguidlist


@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReportSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReport200ApplicationJSON:
    data: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReport401ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReport403ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReport422ApplicationJSON:
    errors: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReport429ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReport500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReportRequest:
    request: shared_documentuploadstatusguidlist.DocumentUploadStatusGUIDList = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetBenefitsDocumentUploadStatusReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBenefitsDocumentUploadStatusReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_benefits_document_upload_status_report_200_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport200ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_report_401_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport401ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_report_403_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport403ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_report_422_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport422ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_report_429_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport429ApplicationJSON] = dataclasses.field(default=None)
    get_benefits_document_upload_status_report_500_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport500ApplicationJSON] = dataclasses.field(default=None)
    
