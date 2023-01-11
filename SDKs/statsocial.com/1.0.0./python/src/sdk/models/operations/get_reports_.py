import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import report_success as shared_report_success


@dataclasses.dataclass
class GetReportsQueryParams:
    report_hash: str = dataclasses.field(metadata={'query_param': { 'field_name': 'report_hash', 'style': 'form', 'explode': True }})
    sample: int = dataclasses.field(metadata={'query_param': { 'field_name': 'sample', 'style': 'form', 'explode': True }})
    baseline: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'baseline', 'style': 'form', 'explode': True }})
    report_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'report_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportsRequest:
    query_params: GetReportsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_four_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    report_success: Optional[shared_report_success.ReportSuccess] = dataclasses.field(default=None)
    
