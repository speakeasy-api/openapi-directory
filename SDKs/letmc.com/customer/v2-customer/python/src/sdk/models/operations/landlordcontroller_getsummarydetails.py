import dataclasses
from typing import Optional
from ..shared import landlordsummarymodel as shared_landlordsummarymodel


@dataclasses.dataclass
class LandlordControllerGetSummaryDetailsPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetSummaryDetailsQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetSummaryDetailsRequest:
    path_params: LandlordControllerGetSummaryDetailsPathParams = dataclasses.field()
    query_params: LandlordControllerGetSummaryDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetSummaryDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_summary_model: Optional[shared_landlordsummarymodel.LandlordSummaryModel] = dataclasses.field(default=None)
    
