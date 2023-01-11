import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class PostReportsTweetCreateQueryParams:
    end_date: int = dataclasses.field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    report_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'report_name', 'style': 'form', 'explode': True }})
    start_date: int = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    terms: str = dataclasses.field(metadata={'query_param': { 'field_name': 'terms', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsTweetCreateRequest:
    query_params: PostReportsTweetCreateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsTweetCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    create_tweet: Optional[Any] = dataclasses.field(default=None)
    
