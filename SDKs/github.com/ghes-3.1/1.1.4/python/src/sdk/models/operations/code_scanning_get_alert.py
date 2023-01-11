import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_alert as shared_code_scanning_alert


@dataclasses.dataclass
class CodeScanningGetAlertPathParams:
    alert_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningGetAlert503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningGetAlertRequest:
    path_params: CodeScanningGetAlertPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CodeScanningGetAlertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_alert: Optional[shared_code_scanning_alert.CodeScanningAlert] = dataclasses.field(default=None)
    code_scanning_get_alert_503_application_json_object: Optional[CodeScanningGetAlert503ApplicationJSON] = dataclasses.field(default=None)
    
