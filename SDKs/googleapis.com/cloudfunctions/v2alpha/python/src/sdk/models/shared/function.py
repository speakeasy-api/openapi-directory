import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildconfig as shared_buildconfig
from ..shared import eventtrigger as shared_eventtrigger
from ..shared import serviceconfig as shared_serviceconfig
from ..shared import buildconfig as shared_buildconfig
from ..shared import eventtrigger as shared_eventtrigger
from ..shared import serviceconfig as shared_serviceconfig
from ..shared import googlecloudfunctionsv2alphastatemessage as shared_googlecloudfunctionsv2alphastatemessage

class FunctionEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    GEN_1 = "GEN_1"
    GEN_2 = "GEN_2"

class FunctionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DEPLOYING = "DEPLOYING"
    DELETING = "DELETING"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclasses.dataclass
class FunctionInput:
    r"""FunctionInput
    Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
    """
    
    build_config: Optional[shared_buildconfig.BuildConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[FunctionEnvironmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    event_trigger: Optional[shared_eventtrigger.EventTriggerInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_config: Optional[shared_serviceconfig.ServiceConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class Function:
    r"""Function
    Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
    """
    
    build_config: Optional[shared_buildconfig.BuildConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[FunctionEnvironmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    event_trigger: Optional[shared_eventtrigger.EventTrigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_config: Optional[shared_serviceconfig.ServiceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfig') }})
    state: Optional[FunctionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_messages: Optional[list[shared_googlecloudfunctionsv2alphastatemessage.GoogleCloudFunctionsV2alphaStateMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessages') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
