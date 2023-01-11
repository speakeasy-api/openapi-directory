import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aquifer as shared_aquifer


@dataclasses.dataclass
class AquifersListQueryParams:
    aquifer_id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aquifer_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AquifersList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_aquifer.Aquifer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class AquifersListRequest:
    query_params: AquifersListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AquifersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aquifers_list_200_application_json_object: Optional[AquifersList200ApplicationJSON] = dataclasses.field(default=None)
    
