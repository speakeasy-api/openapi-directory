import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetApodQueryParams:
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    hd: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hd', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApodSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetApodRequest:
    query_params: GetApodQueryParams = dataclasses.field()
    security: GetApodSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetApodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_apod_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    
