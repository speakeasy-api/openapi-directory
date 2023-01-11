import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1


@dataclasses.dataclass
class GetFilePaymentsFilePaymentIDReportFilePathParams:
    file_payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FilePaymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFilePaymentsFilePaymentIDReportFileHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFilePaymentsFilePaymentIDReportFileSecurity:
    tppo_auth2_security: shared_security.SchemeTppoAuth2Security = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFilePaymentsFilePaymentIDReportFileRequest:
    headers: GetFilePaymentsFilePaymentIDReportFileHeaders = dataclasses.field()
    path_params: GetFilePaymentsFilePaymentIDReportFilePathParams = dataclasses.field()
    security: GetFilePaymentsFilePaymentIDReportFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFilePaymentsFilePaymentIDReportFileResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    file: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    
