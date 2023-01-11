import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchPortSchedulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortSchedule
        The schedule for switch port scheduling. Schedules are applied to days of the week.
        When it's empty, default schedule with all days of a week are configured.
        Any unspecified day in the schedule is added as a default schedule configuration of the day.
    
    """
    
    friday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_schedule: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portSchedule') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleRequest:
    path_params: CreateNetworkSwitchPortSchedulePathParams = dataclasses.field()
    request: CreateNetworkSwitchPortScheduleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchPortScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_port_schedule_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
