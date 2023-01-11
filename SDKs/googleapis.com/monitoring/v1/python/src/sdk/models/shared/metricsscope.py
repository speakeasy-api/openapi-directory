import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monitoredproject as shared_monitoredproject


@dataclass_json
@dataclasses.dataclass
class MetricsScope:
    r"""MetricsScope
    Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    monitored_projects: Optional[list[shared_monitoredproject.MonitoredProject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredProjects') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
