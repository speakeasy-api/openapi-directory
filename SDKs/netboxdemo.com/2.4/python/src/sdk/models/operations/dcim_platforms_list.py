import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platform as shared_platform


@dataclasses.dataclass
class DcimPlatformsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimPlatformsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_platform.Platform] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimPlatformsListRequest:
    query_params: DcimPlatformsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPlatformsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_platforms_list_200_application_json_object: Optional[DcimPlatformsList200ApplicationJSON] = dataclasses.field(default=None)
    
