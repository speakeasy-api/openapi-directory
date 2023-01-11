import dataclasses
from typing import Optional
from ..shared import landlordtenancymodel as shared_landlordtenancymodel


@dataclasses.dataclass
class LandlordControllerGetTenancyPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetTenancyQueryParams:
    tenancy_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetTenancyRequest:
    path_params: LandlordControllerGetTenancyPathParams = dataclasses.field()
    query_params: LandlordControllerGetTenancyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetTenancyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_tenancy_model: Optional[shared_landlordtenancymodel.LandlordTenancyModel] = dataclasses.field(default=None)
    
