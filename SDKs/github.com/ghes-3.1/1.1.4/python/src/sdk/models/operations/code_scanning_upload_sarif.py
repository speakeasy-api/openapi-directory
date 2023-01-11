import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_sarifs_receipt as shared_code_scanning_sarifs_receipt


@dataclasses.dataclass
class CodeScanningUploadSarifPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningUploadSarifRequestBody:
    commit_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_sha') }})
    ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    sarif: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sarif') }})
    checkout_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkout_uri') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tool_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tool_name') }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningUploadSarif503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningUploadSarifRequest:
    path_params: CodeScanningUploadSarifPathParams = dataclasses.field()
    request: Optional[CodeScanningUploadSarifRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CodeScanningUploadSarifResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_sarifs_receipt: Optional[shared_code_scanning_sarifs_receipt.CodeScanningSarifsReceipt] = dataclasses.field(default=None)
    code_scanning_upload_sarif_503_application_json_object: Optional[CodeScanningUploadSarif503ApplicationJSON] = dataclasses.field(default=None)
    
