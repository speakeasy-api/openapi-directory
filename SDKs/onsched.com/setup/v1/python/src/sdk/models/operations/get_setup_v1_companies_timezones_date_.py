import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import timezoneviewmodel as shared_timezoneviewmodel


@dataclasses.dataclass
class GetSetupV1CompaniesTimezonesDatePathParams:
    date_: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CompaniesTimezonesDateRequest:
    path_params: GetSetupV1CompaniesTimezonesDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CompaniesTimezonesDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timezone_view_model: Optional[shared_timezoneviewmodel.TimezoneViewModel] = dataclasses.field(default=None)
    
