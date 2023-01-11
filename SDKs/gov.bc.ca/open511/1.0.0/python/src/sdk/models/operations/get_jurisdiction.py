import dataclasses
from typing import Optional
from enum import Enum

class GetJurisdictionFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetJurisdictionQueryParams:
    format: Optional[GetJurisdictionFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetJurisdictionRequest:
    query_params: GetJurisdictionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJurisdictionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
