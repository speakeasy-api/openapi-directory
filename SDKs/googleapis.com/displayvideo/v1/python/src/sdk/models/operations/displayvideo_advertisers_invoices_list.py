import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listinvoicesresponse as shared_listinvoicesresponse


@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListPathParams:
    advertiser_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'advertiserId', 'style': 'simple', 'explode': False }})
    
class DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum(str, Enum):
    LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED"
    LOI_SAPIN_INVOICE_TYPE_MEDIA = "LOI_SAPIN_INVOICE_TYPE_MEDIA"
    LOI_SAPIN_INVOICE_TYPE_PLATFORM = "LOI_SAPIN_INVOICE_TYPE_PLATFORM"


@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    issue_month: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'issueMonth', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    loi_sapin_invoice_type: Optional[DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'loiSapinInvoiceType', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListSecurity:
    option1: Optional[DisplayvideoAdvertisersInvoicesListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DisplayvideoAdvertisersInvoicesListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListRequest:
    path_params: DisplayvideoAdvertisersInvoicesListPathParams = dataclasses.field()
    query_params: DisplayvideoAdvertisersInvoicesListQueryParams = dataclasses.field()
    security: DisplayvideoAdvertisersInvoicesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisplayvideoAdvertisersInvoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_invoices_response: Optional[shared_listinvoicesresponse.ListInvoicesResponse] = dataclasses.field(default=None)
    
