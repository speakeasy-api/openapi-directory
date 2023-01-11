import dataclasses
from typing import Optional
from enum import Enum
from ..shared import paymentproduct_enum as shared_paymentproduct_enum
from ..shared import paymentservice_enum as shared_paymentservice_enum
from ..shared import psu_http_method_enum as shared_psu_http_method_enum
from ..shared import security as shared_security
from ..shared import error400_ng_pis as shared_error400_ng_pis
from ..shared import error400_pis as shared_error400_pis
from ..shared import error401_ng_pis as shared_error401_ng_pis
from ..shared import error401_pis as shared_error401_pis
from ..shared import error403_ng_pis as shared_error403_ng_pis
from ..shared import error403_pis as shared_error403_pis
from ..shared import error404_ng_pis as shared_error404_ng_pis
from ..shared import error404_pis as shared_error404_pis
from ..shared import error405_ng_pis_canc as shared_error405_ng_pis_canc
from ..shared import error405_pis_canc as shared_error405_pis_canc
from ..shared import error409_ng_pis as shared_error409_ng_pis
from ..shared import error409_pis as shared_error409_pis
from ..shared import paymentinitiationcancelresponse_202 as shared_paymentinitiationcancelresponse_202


@dataclasses.dataclass
class CancelPaymentPathParams:
    payment_product: shared_paymentproduct_enum.PaymentProductEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-product', 'style': 'simple', 'explode': False }})
    payment_service: shared_paymentservice_enum.PaymentServiceEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-service', 'style': 'simple', 'explode': False }})
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelPaymentHeaders:
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
    tpp_explicit_authorisation_preferred: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Explicit-Authorisation-Preferred', 'style': 'simple', 'explode': False }})
    tpp_nok_redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Nok-Redirect-URI', 'style': 'simple', 'explode': False }})
    tpp_redirect_preferred: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-Preferred', 'style': 'simple', 'explode': False }})
    tpp_redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-URI', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelPaymentSecurity:
    bearer_auth_o_auth: Optional[shared_security.SchemeBearerAuthOAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CancelPaymentRequest:
    headers: CancelPaymentHeaders = dataclasses.field()
    path_params: CancelPaymentPathParams = dataclasses.field()
    security: CancelPaymentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CancelPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error400_ng_pis: Optional[shared_error400_ng_pis.Error400NgPis] = dataclasses.field(default=None)
    error400_pis: Optional[shared_error400_pis.Error400Pis] = dataclasses.field(default=None)
    error401_ng_pis: Optional[shared_error401_ng_pis.Error401NgPis] = dataclasses.field(default=None)
    error401_pis: Optional[shared_error401_pis.Error401Pis] = dataclasses.field(default=None)
    error403_ng_pis: Optional[shared_error403_ng_pis.Error403NgPis] = dataclasses.field(default=None)
    error403_pis: Optional[shared_error403_pis.Error403Pis] = dataclasses.field(default=None)
    error404_ng_pis: Optional[shared_error404_ng_pis.Error404NgPis] = dataclasses.field(default=None)
    error404_pis: Optional[shared_error404_pis.Error404Pis] = dataclasses.field(default=None)
    error405_ng_pis_canc: Optional[shared_error405_ng_pis_canc.Error405NgPisCanc] = dataclasses.field(default=None)
    error405_pis_canc: Optional[shared_error405_pis_canc.Error405PisCanc] = dataclasses.field(default=None)
    error409_ng_pis: Optional[shared_error409_ng_pis.Error409NgPis] = dataclasses.field(default=None)
    error409_pis: Optional[shared_error409_pis.Error409Pis] = dataclasses.field(default=None)
    payment_initiation_cancel_response_202: Optional[shared_paymentinitiationcancelresponse_202.PaymentInitiationCancelResponse202] = dataclasses.field(default=None)
    
