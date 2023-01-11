import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetApplicationsStatusQueryParams:
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApplicationsStatusRequest:
    query_params: GetApplicationsStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationsStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    application_status: Optional[Any] = dataclasses.field(default=None)
    
