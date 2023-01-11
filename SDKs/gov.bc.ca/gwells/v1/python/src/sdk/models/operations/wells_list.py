import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import welllist as shared_welllist


@dataclasses.dataclass
class WellsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class WellsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_welllist.WellList] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class WellsListRequest:
    query_params: WellsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class WellsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wells_list_200_application_json_object: Optional[WellsList200ApplicationJSON] = dataclasses.field(default=None)
    
