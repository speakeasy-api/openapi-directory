import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import config as shared_config

class WebSecurityScannerSettingsServiceEnablementStateEnum(str, Enum):
    ENABLEMENT_STATE_UNSPECIFIED = "ENABLEMENT_STATE_UNSPECIFIED"
    INHERITED = "INHERITED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class WebSecurityScannerSettings:
    r"""WebSecurityScannerSettings
    Resource capturing the settings for the Web Security Scanner service.
    """
    
    modules: Optional[dict[str, shared_config.Config]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modules') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_enablement_state: Optional[WebSecurityScannerSettingsServiceEnablementStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceEnablementState') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
