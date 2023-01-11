import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeofftyperesource as shared_timeofftyperesource


@dataclasses.dataclass
class GetCompanyTimeOffTypesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCompanyTimeOffTypes200ApplicationJSON:
    data: Optional[list[shared_timeofftyperesource.TimeOffTypeResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class GetCompanyTimeOffTypesRequest:
    query_params: GetCompanyTimeOffTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCompanyTimeOffTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_company_time_off_types_200_application_json_object: Optional[GetCompanyTimeOffTypes200ApplicationJSON] = dataclasses.field(default=None)
    
