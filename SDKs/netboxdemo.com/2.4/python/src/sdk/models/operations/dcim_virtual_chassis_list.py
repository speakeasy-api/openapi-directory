import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualchassis as shared_virtualchassis


@dataclasses.dataclass
class DcimVirtualChassisListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimVirtualChassisList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_virtualchassis.VirtualChassis] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimVirtualChassisListRequest:
    query_params: DcimVirtualChassisListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimVirtualChassisListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_virtual_chassis_list_200_application_json_object: Optional[DcimVirtualChassisList200ApplicationJSON] = dataclasses.field(default=None)
    
