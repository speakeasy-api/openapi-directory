import dataclasses
from typing import Optional
from ..shared import landlordrentarrearsmodel as shared_landlordrentarrearsmodel


@dataclasses.dataclass
class LandlordControllerGetRentArrearsPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetRentArrearsQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetRentArrearsRequest:
    path_params: LandlordControllerGetRentArrearsPathParams = dataclasses.field()
    query_params: LandlordControllerGetRentArrearsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetRentArrearsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_rent_arrears_model: Optional[shared_landlordrentarrearsmodel.LandlordRentArrearsModel] = dataclasses.field(default=None)
    
