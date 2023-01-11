import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import statistics as shared_statistics


@dataclasses.dataclass
class GetStatisticsQueryParams:
    from_: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatisticsRequest:
    query_params: GetStatisticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    statistics: Optional[list[shared_statistics.Statistics]] = dataclasses.field(default=None)
    
