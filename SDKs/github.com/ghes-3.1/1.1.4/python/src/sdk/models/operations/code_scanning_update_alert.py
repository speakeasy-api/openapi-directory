import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import code_scanning_alert_dismissed_reason_enum as shared_code_scanning_alert_dismissed_reason_enum
from ..shared import code_scanning_alert_set_state_enum as shared_code_scanning_alert_set_state_enum
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_alert as shared_code_scanning_alert


@dataclasses.dataclass
class CodeScanningUpdateAlertPathParams:
    alert_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningUpdateAlertRequestBody:
    state: shared_code_scanning_alert_set_state_enum.CodeScanningAlertSetStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    dismissed_reason: Optional[shared_code_scanning_alert_dismissed_reason_enum.CodeScanningAlertDismissedReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_reason') }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningUpdateAlert503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningUpdateAlertRequest:
    path_params: CodeScanningUpdateAlertPathParams = dataclasses.field()
    request: Optional[CodeScanningUpdateAlertRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CodeScanningUpdateAlertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_alert: Optional[shared_code_scanning_alert.CodeScanningAlert] = dataclasses.field(default=None)
    code_scanning_update_alert_503_application_json_object: Optional[CodeScanningUpdateAlert503ApplicationJSON] = dataclasses.field(default=None)
    
