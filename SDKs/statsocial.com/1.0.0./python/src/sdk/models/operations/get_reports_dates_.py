import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetReportsDatesQueryParams:
    report_hash: str = dataclasses.field(metadata={'query_param': { 'field_name': 'report_hash', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportsDatesRequest:
    query_params: GetReportsDatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsDatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_four_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    report_dates: Optional[Any] = dataclasses.field(default=None)
    
