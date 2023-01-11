import dataclasses
from typing import Optional
from ..shared import maintenance as shared_maintenance


@dataclasses.dataclass
class GetMaintenanceQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMaintenanceRequest:
    query_params: GetMaintenanceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMaintenanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    maintenances: Optional[list[shared_maintenance.Maintenance]] = dataclasses.field(default=None)
    
