import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class LandlordControllerGetInvetoryReportPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetInvetoryReportQueryParams:
    tenancy_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetInvetoryReportRequest:
    path_params: LandlordControllerGetInvetoryReportPathParams = dataclasses.field()
    query_params: LandlordControllerGetInvetoryReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetInvetoryReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
