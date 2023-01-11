import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import overallqualityresponse as shared_overallqualityresponse


@dataclasses.dataclass
class QualityGetOverallDataQualityForSitesPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QualityGetOverallDataQualityForSitesQueryParams:
    end_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    sites: str = dataclasses.field(metadata={'query_param': { 'field_name': 'sites', 'style': 'form', 'explode': True }})
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QualityGetOverallDataQualityForSitesRequest:
    path_params: QualityGetOverallDataQualityForSitesPathParams = dataclasses.field()
    query_params: QualityGetOverallDataQualityForSitesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class QualityGetOverallDataQualityForSitesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    overall_quality_response: Optional[shared_overallqualityresponse.OverallQualityResponse] = dataclasses.field(default=None)
    
