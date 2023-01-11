import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret_scanning_alert as shared_secret_scanning_alert


@dataclasses.dataclass
class SecretScanningGetAlertPathParams:
    alert_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SecretScanningGetAlert503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SecretScanningGetAlertRequest:
    path_params: SecretScanningGetAlertPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretScanningGetAlertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret_scanning_alert: Optional[shared_secret_scanning_alert.SecretScanningAlert] = dataclasses.field(default=None)
    secret_scanning_get_alert_503_application_json_object: Optional[SecretScanningGetAlert503ApplicationJSON] = dataclasses.field(default=None)
    
