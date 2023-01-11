import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceandroiddetails as shared_instanceandroiddetails
from ..shared import instanceiosdetails as shared_instanceiosdetails
from ..shared import instancewebdetails as shared_instancewebdetails

class InstancePlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    WEB_APP = "WEB_APP"


@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    The Instance resource.
    """
    
    acquisition_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionUri') }})
    android_instance: Optional[shared_instanceandroiddetails.InstanceAndroidDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInstance') }})
    ios_instance: Optional[shared_instanceiosdetails.InstanceIosDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosInstance') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform_type: Optional[InstancePlatformTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformType') }})
    realtime_play: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realtimePlay') }})
    turn_based_play: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnBasedPlay') }})
    web_instance: Optional[shared_instancewebdetails.InstanceWebDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webInstance') }})
    
