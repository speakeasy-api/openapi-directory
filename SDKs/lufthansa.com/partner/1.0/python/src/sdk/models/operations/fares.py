import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class FaresQueryParams:
    carriers: str = dataclasses.field(metadata={'query_param': { 'field_name': 'carriers', 'style': 'form', 'explode': True }})
    catalogues: str = dataclasses.field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    segments: str = dataclasses.field(metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': True }})
    fare_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fare-types', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FaresHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FaresSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FaresRequest:
    headers: FaresHeaders = dataclasses.field()
    query_params: FaresQueryParams = dataclasses.field()
    security: FaresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FaresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fares_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
