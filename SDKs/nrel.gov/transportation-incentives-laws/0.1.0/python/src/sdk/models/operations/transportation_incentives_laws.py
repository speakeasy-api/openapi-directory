import dataclasses
from typing import Optional
from enum import Enum

class TransportationIncentivesLawsOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    CSV = "csv"


@dataclasses.dataclass
class TransportationIncentivesLawsPathParams:
    output_format: TransportationIncentivesLawsOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransportationIncentivesLawsQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    expired: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expired', 'style': 'form', 'explode': True }})
    incentive_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'incentive_type', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    law_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'law_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    local: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'local', 'style': 'form', 'explode': True }})
    poc: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'poc', 'style': 'form', 'explode': True }})
    recent: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recent', 'style': 'form', 'explode': True }})
    regulation_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regulation_type', 'style': 'form', 'explode': True }})
    technology: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'technology', 'style': 'form', 'explode': True }})
    user_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TransportationIncentivesLawsRequest:
    path_params: TransportationIncentivesLawsPathParams = dataclasses.field()
    query_params: TransportationIncentivesLawsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TransportationIncentivesLawsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
