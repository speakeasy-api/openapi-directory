import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weeklymaintenancewindow as shared_weeklymaintenancewindow
from ..shared import weeklymaintenancewindow as shared_weeklymaintenancewindow


@dataclass_json
@dataclasses.dataclass
class MaintenancePolicyInput:
    r"""MaintenancePolicyInput
    Maintenance policy for an instance.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    weekly_maintenance_window: Optional[list[shared_weeklymaintenancewindow.WeeklyMaintenanceWindowInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyMaintenanceWindow') }})
    

@dataclass_json
@dataclasses.dataclass
class MaintenancePolicy:
    r"""MaintenancePolicy
    Maintenance policy for an instance.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    weekly_maintenance_window: Optional[list[shared_weeklymaintenancewindow.WeeklyMaintenanceWindow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyMaintenanceWindow') }})
    
