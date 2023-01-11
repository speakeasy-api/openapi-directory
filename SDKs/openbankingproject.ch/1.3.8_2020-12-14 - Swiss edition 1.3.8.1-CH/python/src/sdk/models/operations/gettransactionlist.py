import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import bookingstatus_enum as shared_bookingstatus_enum
from ..shared import psu_http_method_enum as shared_psu_http_method_enum
from ..shared import security as shared_security
from ..shared import error400_ais as shared_error400_ais
from ..shared import error400_ng_ais as shared_error400_ng_ais
from ..shared import error401_ais as shared_error401_ais
from ..shared import error401_ng_ais as shared_error401_ng_ais
from ..shared import error403_ais as shared_error403_ais
from ..shared import error403_ng_ais as shared_error403_ng_ais
from ..shared import error404_ais as shared_error404_ais
from ..shared import error404_ng_ais as shared_error404_ng_ais
from ..shared import error405_ais as shared_error405_ais
from ..shared import error405_ng_ais as shared_error405_ng_ais
from ..shared import error406_ais as shared_error406_ais
from ..shared import error406_ng_ais as shared_error406_ng_ais
from ..shared import error409_ais as shared_error409_ais
from ..shared import error409_ng_ais as shared_error409_ng_ais
from ..shared import error429_ais as shared_error429_ais
from ..shared import error429_ng_ais as shared_error429_ng_ais
from ..shared import transactionsresponse_200_json as shared_transactionsresponse_200_json


@dataclasses.dataclass
class GetTransactionListPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionListQueryParams:
    booking_status: shared_bookingstatus_enum.BookingStatusEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'bookingStatus', 'style': 'form', 'explode': True }})
    date_from: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    delta_list: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deltaList', 'style': 'form', 'explode': True }})
    entry_reference_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entryReferenceFrom', 'style': 'form', 'explode': True }})
    with_balance: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'withBalance', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionListHeaders:
    consent_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Consent-ID', 'style': 'simple', 'explode': False }})
    x_request_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Request-ID', 'style': 'simple', 'explode': False }})
    digest: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Digest', 'style': 'simple', 'explode': False }})
    psu_accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept', 'style': 'simple', 'explode': False }})
    psu_accept_charset: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Charset', 'style': 'simple', 'explode': False }})
    psu_accept_encoding: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Encoding', 'style': 'simple', 'explode': False }})
    psu_accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Language', 'style': 'simple', 'explode': False }})
    psu_device_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Device-ID', 'style': 'simple', 'explode': False }})
    psu_geo_location: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Geo-Location', 'style': 'simple', 'explode': False }})
    psu_http_method: Optional[shared_psu_http_method_enum.PsuHTTPMethodEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Http-Method', 'style': 'simple', 'explode': False }})
    psu_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Address', 'style': 'simple', 'explode': False }})
    psu_ip_port: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Port', 'style': 'simple', 'explode': False }})
    psu_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-User-Agent', 'style': 'simple', 'explode': False }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Signature', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionListSecurity:
    bearer_auth_o_auth: Optional[shared_security.SchemeBearerAuthOAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTransactionListRequest:
    headers: GetTransactionListHeaders = dataclasses.field()
    path_params: GetTransactionListPathParams = dataclasses.field()
    query_params: GetTransactionListQueryParams = dataclasses.field()
    security: GetTransactionListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error400_ais: Optional[shared_error400_ais.Error400Ais] = dataclasses.field(default=None)
    error400_ng_ais: Optional[shared_error400_ng_ais.Error400NgAis] = dataclasses.field(default=None)
    error401_ais: Optional[shared_error401_ais.Error401Ais] = dataclasses.field(default=None)
    error401_ng_ais: Optional[shared_error401_ng_ais.Error401NgAis] = dataclasses.field(default=None)
    error403_ais: Optional[shared_error403_ais.Error403Ais] = dataclasses.field(default=None)
    error403_ng_ais: Optional[shared_error403_ng_ais.Error403NgAis] = dataclasses.field(default=None)
    error404_ais: Optional[shared_error404_ais.Error404Ais] = dataclasses.field(default=None)
    error404_ng_ais: Optional[shared_error404_ng_ais.Error404NgAis] = dataclasses.field(default=None)
    error405_ais: Optional[shared_error405_ais.Error405Ais] = dataclasses.field(default=None)
    error405_ng_ais: Optional[shared_error405_ng_ais.Error405NgAis] = dataclasses.field(default=None)
    error406_ais: Optional[shared_error406_ais.Error406Ais] = dataclasses.field(default=None)
    error406_ng_ais: Optional[shared_error406_ng_ais.Error406NgAis] = dataclasses.field(default=None)
    error409_ais: Optional[shared_error409_ais.Error409Ais] = dataclasses.field(default=None)
    error409_ng_ais: Optional[shared_error409_ng_ais.Error409NgAis] = dataclasses.field(default=None)
    error429_ais: Optional[shared_error429_ais.Error429Ais] = dataclasses.field(default=None)
    error429_ng_ais: Optional[shared_error429_ng_ais.Error429NgAis] = dataclasses.field(default=None)
    get_transaction_list_200_text_plain_one_of: Optional[str] = dataclasses.field(default=None)
    transactions_response_200_json: Optional[shared_transactionsresponse_200_json.TransactionsResponse200JSON] = dataclasses.field(default=None)
    
