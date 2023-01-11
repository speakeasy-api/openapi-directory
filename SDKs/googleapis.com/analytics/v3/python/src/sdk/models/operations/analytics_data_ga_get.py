import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import gadata as shared_gadata

class AnalyticsDataGaGetOutputEnum(str, Enum):
    DATA_TABLE = "dataTable"
    JSON = "json"

class AnalyticsDataGaGetSamplingLevelEnum(str, Enum):
    DEFAULT = "DEFAULT"
    FASTER = "FASTER"
    HIGHER_PRECISION = "HIGHER_PRECISION"


@dataclasses.dataclass
class AnalyticsDataGaGetQueryParams:
    end_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end-date', 'style': 'form', 'explode': True }})
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    metrics: str = dataclasses.field(metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start-date', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dimensions: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dimensions', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    include_empty_rows: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include-empty-rows', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    output: Optional[AnalyticsDataGaGetOutputEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sampling_level: Optional[AnalyticsDataGaGetSamplingLevelEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'samplingLevel', 'style': 'form', 'explode': True }})
    segment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segment', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start-index', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AnalyticsDataGaGetSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AnalyticsDataGaGetSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AnalyticsDataGaGetSecurity:
    option1: Optional[AnalyticsDataGaGetSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsDataGaGetSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class AnalyticsDataGaGetRequest:
    query_params: AnalyticsDataGaGetQueryParams = dataclasses.field()
    security: AnalyticsDataGaGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AnalyticsDataGaGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ga_data: Optional[shared_gadata.GaData] = dataclasses.field(default=None)
    
