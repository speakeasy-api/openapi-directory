import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import code_scanning_alert_classification_enum as shared_code_scanning_alert_classification_enum
from ..shared import code_scanning_alert_location as shared_code_scanning_alert_location
from ..shared import code_scanning_alert_state_enum as shared_code_scanning_alert_state_enum


@dataclass_json
@dataclasses.dataclass
class CodeScanningAlertInstanceMessage:
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningAlertInstance:
    analysis_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis_key') }})
    classifications: Optional[list[shared_code_scanning_alert_classification_enum.CodeScanningAlertClassificationEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    commit_sha: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_sha') }})
    environment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    location: Optional[shared_code_scanning_alert_location.CodeScanningAlertLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[CodeScanningAlertInstanceMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    state: Optional[shared_code_scanning_alert_state_enum.CodeScanningAlertStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
