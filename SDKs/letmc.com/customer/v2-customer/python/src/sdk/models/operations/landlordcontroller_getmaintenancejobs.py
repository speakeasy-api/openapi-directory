import dataclasses
from typing import Optional
from ..shared import landlordmaintenancemodel as shared_landlordmaintenancemodel


@dataclasses.dataclass
class LandlordControllerGetMaintenanceJobsPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetMaintenanceJobsQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetMaintenanceJobsRequest:
    path_params: LandlordControllerGetMaintenanceJobsPathParams = dataclasses.field()
    query_params: LandlordControllerGetMaintenanceJobsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetMaintenanceJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_maintenance_model: Optional[shared_landlordmaintenancemodel.LandlordMaintenanceModel] = dataclasses.field(default=None)
    
