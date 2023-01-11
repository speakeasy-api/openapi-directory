import dataclasses
from typing import Optional
from enum import Enum

class GetHeatingMarginCoverageDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetHeatingMarginCoverageQueryParams:
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'applicationId', 'style': 'form', 'explode': True }})
    covered: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'covered', 'style': 'form', 'explode': True }})
    direction: Optional[GetHeatingMarginCoverageDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHeatingMarginCoverageRequest:
    query_params: GetHeatingMarginCoverageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHeatingMarginCoverageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
