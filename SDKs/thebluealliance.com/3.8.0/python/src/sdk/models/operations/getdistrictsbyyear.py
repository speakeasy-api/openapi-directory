import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import district_list as shared_district_list


@dataclasses.dataclass
class GetDistrictsByYearPathParams:
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictsByYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictsByYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistrictsByYearRequest:
    headers: GetDistrictsByYearHeaders = dataclasses.field()
    path_params: GetDistrictsByYearPathParams = dataclasses.field()
    security: GetDistrictsByYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictsByYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    district_lists: Optional[list[shared_district_list.DistrictList]] = dataclasses.field(default=None)
    
