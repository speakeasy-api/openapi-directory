import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import uvindexresult as shared_uvindexresult


@dataclasses.dataclass
class GetUvQueryParams:
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dt: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dt', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUvHeaders:
    x_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUvRequest:
    headers: GetUvHeaders = dataclasses.field()
    query_params: GetUvQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    uv_index_result: Optional[shared_uvindexresult.UvIndexResult] = dataclasses.field(default=None)
    
