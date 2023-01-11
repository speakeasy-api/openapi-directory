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
from ..shared import conversionlist as shared_conversionlist


@dataclasses.dataclass
class DoubleclicksearchConversionGetByCustomerIDPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DoubleclicksearchConversionGetByCustomerIDQueryParams:
    end_date: int = dataclasses.field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    row_count: int = dataclasses.field(metadata={'query_param': { 'field_name': 'rowCount', 'style': 'form', 'explode': True }})
    start_date: int = dataclasses.field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    start_row: int = dataclasses.field(metadata={'query_param': { 'field_name': 'startRow', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    ad_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'adGroupId', 'style': 'form', 'explode': True }})
    ad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'adId', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    agency_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'agencyId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignId', 'style': 'form', 'explode': True }})
    criterion_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'criterionId', 'style': 'form', 'explode': True }})
    engine_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engineAccountId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DoubleclicksearchConversionGetByCustomerIDSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DoubleclicksearchConversionGetByCustomerIDRequest:
    path_params: DoubleclicksearchConversionGetByCustomerIDPathParams = dataclasses.field()
    query_params: DoubleclicksearchConversionGetByCustomerIDQueryParams = dataclasses.field()
    security: DoubleclicksearchConversionGetByCustomerIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DoubleclicksearchConversionGetByCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversion_list: Optional[shared_conversionlist.ConversionList] = dataclasses.field(default=None)
    
