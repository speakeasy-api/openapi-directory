import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rir as shared_rir


@dataclasses.dataclass
class IpamRirsListQueryParams:
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_private: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_private', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class IpamRirsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_rir.Rir] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class IpamRirsListRequest:
    query_params: IpamRirsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamRirsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ipam_rirs_list_200_application_json_object: Optional[IpamRirsList200ApplicationJSON] = dataclasses.field(default=None)
    
