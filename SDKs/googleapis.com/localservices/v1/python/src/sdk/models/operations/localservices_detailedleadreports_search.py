import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse as shared_googleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse


@dataclasses.dataclass
class LocalservicesDetailedLeadReportsSearchQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_date_day: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate.day', 'style': 'form', 'explode': True }})
    end_date_month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate.month', 'style': 'form', 'explode': True }})
    end_date_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate.year', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_date_day: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate.day', 'style': 'form', 'explode': True }})
    start_date_month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate.month', 'style': 'form', 'explode': True }})
    start_date_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate.year', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LocalservicesDetailedLeadReportsSearchSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LocalservicesDetailedLeadReportsSearchRequest:
    query_params: LocalservicesDetailedLeadReportsSearchQueryParams = dataclasses.field()
    security: LocalservicesDetailedLeadReportsSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocalservicesDetailedLeadReportsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response: Optional[shared_googleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse] = dataclasses.field(default=None)
    
