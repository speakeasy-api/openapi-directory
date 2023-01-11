import dataclasses
from typing import Optional
from enum import Enum

class GetJurisdictiongeographyFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetJurisdictiongeographyQueryParams:
    format: Optional[GetJurisdictiongeographyFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetJurisdictiongeographyRequest:
    query_params: GetJurisdictiongeographyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJurisdictiongeographyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
