import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetAPIPhoneValidateQueryParams:
    telephone: str = dataclasses.field(metadata={'query_param': { 'field_name': 'telephone', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIPhoneValidateHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIPhoneValidateRequest:
    headers: GetAPIPhoneValidateHeaders = dataclasses.field()
    query_params: GetAPIPhoneValidateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIPhoneValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
