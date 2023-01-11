import dataclasses
from typing import Optional
from ..shared import landlordprofitlossmodel as shared_landlordprofitlossmodel


@dataclasses.dataclass
class LandlordControllerGetProfitLossReportPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetProfitLossReportQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetProfitLossReportRequest:
    path_params: LandlordControllerGetProfitLossReportPathParams = dataclasses.field()
    query_params: LandlordControllerGetProfitLossReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetProfitLossReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_profit_loss_model: Optional[shared_landlordprofitlossmodel.LandlordProfitLossModel] = dataclasses.field(default=None)
    
