import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class LandlordControllerGetSasReportPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetSasReportQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    year_end: int = dataclasses.field(metadata={'query_param': { 'field_name': 'yearEnd', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetSasReportRequest:
    path_params: LandlordControllerGetSasReportPathParams = dataclasses.field()
    query_params: LandlordControllerGetSasReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetSasReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
