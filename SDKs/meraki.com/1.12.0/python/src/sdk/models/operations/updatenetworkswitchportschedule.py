import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchPortSchedulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule
        The schedule for switch port scheduling. Schedules are applied to days of the week.
        When it's empty, default schedule with all days of a week are configured.
        Any unspecified day in the schedule is added as a default schedule configuration of the day.
    
    """
    
    friday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_schedule: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portSchedule') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleRequest:
    path_params: UpdateNetworkSwitchPortSchedulePathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchPortScheduleRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchPortScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_port_schedule_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
