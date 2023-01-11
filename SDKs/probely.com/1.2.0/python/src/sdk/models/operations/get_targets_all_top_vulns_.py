import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTargetsAllTopVulns200ApplicationJSON:
    zero: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclasses.dataclass
class GetTargetsAllTopVulnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_all_top_vulns_200_application_json_objects: Optional[list[GetTargetsAllTopVulns200ApplicationJSON]] = dataclasses.field(default=None)
    
