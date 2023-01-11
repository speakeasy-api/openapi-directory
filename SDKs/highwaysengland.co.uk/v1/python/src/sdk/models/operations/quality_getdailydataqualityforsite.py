import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import dailyqualityresponse as shared_dailyqualityresponse


@dataclasses.dataclass
class QualityGetDailyDataQualityForSitePathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QualityGetDailyDataQualityForSiteQueryParams:
    end_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    site_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'siteId', 'style': 'form', 'explode': True }})
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QualityGetDailyDataQualityForSiteRequest:
    path_params: QualityGetDailyDataQualityForSitePathParams = dataclasses.field()
    query_params: QualityGetDailyDataQualityForSiteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class QualityGetDailyDataQualityForSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    daily_quality_response: Optional[shared_dailyqualityresponse.DailyQualityResponse] = dataclasses.field(default=None)
    
