import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VersionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_PREVIEW = "TYPE_PREVIEW"
    TYPE_GENERAL_AVAILABILITY = "TYPE_GENERAL_AVAILABILITY"


@dataclass_json
@dataclasses.dataclass
class Version:
    r"""Version
    The Data Fusion version.
    """
    
    available_features: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableFeatures') }})
    default_version: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVersion') }})
    type: Optional[VersionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
