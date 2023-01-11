import dataclasses
from typing import Optional
from enum import Enum
from ..shared import belege as shared_belege


@dataclasses.dataclass
class GetBelegePathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    
class GetBelegeFormatEnum(str, Enum):
    EXPORT = "export"
    BELEG = "beleg"
    UUIDLIST = "uuidlist"

class GetBelegeOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetBelegeQueryParams:
    format: GetBelegeFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    gte: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lte: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lte', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[GetBelegeOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBelegeRequest:
    path_params: GetBelegePathParams = dataclasses.field()
    query_params: GetBelegeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBelegeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    belege: Optional[shared_belege.Belege] = dataclasses.field(default=None)
    
