import dataclasses
from typing import Optional
from ..shared import driver as shared_driver


@dataclasses.dataclass
class GetDriversQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDriversRequest:
    query_params: GetDriversQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDriversResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    drivers: Optional[list[shared_driver.Driver]] = dataclasses.field(default=None)
    
