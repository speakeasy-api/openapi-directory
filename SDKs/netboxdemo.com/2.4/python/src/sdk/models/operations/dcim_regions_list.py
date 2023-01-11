import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import region as shared_region


@dataclasses.dataclass
class DcimRegionsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimRegionsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_region.Region] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimRegionsListRequest:
    query_params: DcimRegionsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRegionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_regions_list_200_application_json_object: Optional[DcimRegionsList200ApplicationJSON] = dataclasses.field(default=None)
    
