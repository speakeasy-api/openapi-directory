import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import psu_http_method_enum as shared_psu_http_method_enum
from ..shared import security as shared_security
from ..shared import updatepsuauthentication as shared_updatepsuauthentication
from ..shared import selectpsuauthenticationmethod as shared_selectpsuauthenticationmethod
from ..shared import transactionauthorisation as shared_transactionauthorisation
from ..shared import error400_ng_sbs as shared_error400_ng_sbs
from ..shared import error400_sbs as shared_error400_sbs
from ..shared import error401_ng_sbs as shared_error401_ng_sbs
from ..shared import error401_sbs as shared_error401_sbs
from ..shared import error403_ng_sbs as shared_error403_ng_sbs
from ..shared import error403_sbs as shared_error403_sbs
from ..shared import error404_ng_sbs as shared_error404_ng_sbs
from ..shared import error404_sbs as shared_error404_sbs
from ..shared import error405_ng_sbs as shared_error405_ng_sbs
from ..shared import error405_sbs as shared_error405_sbs
from ..shared import error409_ng_sbs as shared_error409_ng_sbs
from ..shared import error409_sbs as shared_error409_sbs
from ..shared import startscaprocessresponse as shared_startscaprocessresponse


@dataclasses.dataclass
class StartSigningBasketAuthorisationPathParams:
    basket_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'basketId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartSigningBasketAuthorisationHeaders:
    x_request_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Request-ID', 'style': 'simple', 'explode': False }})
    digest: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Digest', 'style': 'simple', 'explode': False }})
    psu_accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept', 'style': 'simple', 'explode': False }})
    psu_accept_charset: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Charset', 'style': 'simple', 'explode': False }})
    psu_accept_encoding: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Encoding', 'style': 'simple', 'explode': False }})
    psu_accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Language', 'style': 'simple', 'explode': False }})
    psu_corporate_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Corporate-ID', 'style': 'simple', 'explode': False }})
    psu_corporate_id_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Corporate-ID-Type', 'style': 'simple', 'explode': False }})
    psu_device_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Device-ID', 'style': 'simple', 'explode': False }})
    psu_geo_location: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Geo-Location', 'style': 'simple', 'explode': False }})
    psu_http_method: Optional[shared_psu_http_method_enum.PsuHTTPMethodEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-Http-Method', 'style': 'simple', 'explode': False }})
    psu_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-ID', 'style': 'simple', 'explode': False }})
    psu_id_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-ID-Type', 'style': 'simple', 'explode': False }})
    psu_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Address', 'style': 'simple', 'explode': False }})
    psu_ip_port: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Port', 'style': 'simple', 'explode': False }})
    psu_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'PSU-User-Agent', 'style': 'simple', 'explode': False }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Signature', 'style': 'simple', 'explode': False }})
    tpp_nok_redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Nok-Redirect-URI', 'style': 'simple', 'explode': False }})
    tpp_notification_content_preferred: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Notification-Content-Preferred', 'style': 'simple', 'explode': False }})
    tpp_notification_uri: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Notification-URI', 'style': 'simple', 'explode': False }})
    tpp_redirect_preferred: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-Preferred', 'style': 'simple', 'explode': False }})
    tpp_redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-URI', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartSigningBasketAuthorisationSecurity:
    bearer_auth_o_auth: Optional[shared_security.SchemeBearerAuthOAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class StartSigningBasketAuthorisationRequest:
    headers: StartSigningBasketAuthorisationHeaders = dataclasses.field()
    path_params: StartSigningBasketAuthorisationPathParams = dataclasses.field()
    security: StartSigningBasketAuthorisationSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartSigningBasketAuthorisationResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error400_ng_sbs: Optional[shared_error400_ng_sbs.Error400NgSbs] = dataclasses.field(default=None)
    error400_sbs: Optional[shared_error400_sbs.Error400Sbs] = dataclasses.field(default=None)
    error401_ng_sbs: Optional[shared_error401_ng_sbs.Error401NgSbs] = dataclasses.field(default=None)
    error401_sbs: Optional[shared_error401_sbs.Error401Sbs] = dataclasses.field(default=None)
    error403_ng_sbs: Optional[shared_error403_ng_sbs.Error403NgSbs] = dataclasses.field(default=None)
    error403_sbs: Optional[shared_error403_sbs.Error403Sbs] = dataclasses.field(default=None)
    error404_ng_sbs: Optional[shared_error404_ng_sbs.Error404NgSbs] = dataclasses.field(default=None)
    error404_sbs: Optional[shared_error404_sbs.Error404Sbs] = dataclasses.field(default=None)
    error405_ng_sbs: Optional[shared_error405_ng_sbs.Error405NgSbs] = dataclasses.field(default=None)
    error405_sbs: Optional[shared_error405_sbs.Error405Sbs] = dataclasses.field(default=None)
    error409_ng_sbs: Optional[shared_error409_ng_sbs.Error409NgSbs] = dataclasses.field(default=None)
    error409_sbs: Optional[shared_error409_sbs.Error409Sbs] = dataclasses.field(default=None)
    start_scaprocess_response: Optional[shared_startscaprocessresponse.StartScaprocessResponse] = dataclasses.field(default=None)
    
