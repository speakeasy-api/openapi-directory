import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import pageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse as shared_pageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse


@dataclasses.dataclass
class ListFundingAuditDeltasQueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFundingAuditDeltasRequest:
    query_params: ListFundingAuditDeltasQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListFundingAuditDeltasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    page_resource_funding_payor_status_audit_response_funding_payor_status_audit_response: Optional[shared_pageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
