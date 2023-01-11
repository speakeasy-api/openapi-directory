import dataclasses
from typing import Optional
from ..shared import monatsbeleg as shared_monatsbeleg


@dataclasses.dataclass
class GetMonatsbelegePathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMonatsbelegeQueryParams:
    month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMonatsbelegeRequest:
    path_params: GetMonatsbelegePathParams = dataclasses.field()
    query_params: GetMonatsbelegeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMonatsbelegeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    monatsbelegs: Optional[list[shared_monatsbeleg.Monatsbeleg]] = dataclasses.field(default=None)
    
