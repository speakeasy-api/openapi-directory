import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trafficrule as shared_trafficrule


@dataclass_json
@dataclasses.dataclass
class NetworkConfiguration:
    down_rule: Optional[shared_trafficrule.TrafficRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downRule') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    up_rule: Optional[shared_trafficrule.TrafficRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upRule') }})
    
