import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WindowsUpdateSettingsClassificationsEnum(str, Enum):
    CLASSIFICATION_UNSPECIFIED = "CLASSIFICATION_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    SECURITY = "SECURITY"
    DEFINITION = "DEFINITION"
    DRIVER = "DRIVER"
    FEATURE_PACK = "FEATURE_PACK"
    SERVICE_PACK = "SERVICE_PACK"
    TOOL = "TOOL"
    UPDATE_ROLLUP = "UPDATE_ROLLUP"
    UPDATE = "UPDATE"


@dataclass_json
@dataclasses.dataclass
class WindowsUpdateSettings:
    r"""WindowsUpdateSettings
    Windows patching is performed using the Windows Update Agent.
    """
    
    classifications: Optional[list[WindowsUpdateSettingsClassificationsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    excludes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    exclusive_patches: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusivePatches') }})
    
