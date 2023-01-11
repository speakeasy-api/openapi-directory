import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import trust_product_enum_status_enum as shared_trust_product_enum_status_enum
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product as shared_trusthub_v1_trust_product


UPDATE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class UpdateTrustProductPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTrustProductUpdateTrustProductRequest:
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared_trust_product_enum_status_enum.TrustProductEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclasses.dataclass
class UpdateTrustProductSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTrustProductRequest:
    path_params: UpdateTrustProductPathParams = dataclasses.field()
    security: UpdateTrustProductSecurity = dataclasses.field()
    request: Optional[UpdateTrustProductUpdateTrustProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTrustProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product: Optional[shared_trusthub_v1_trust_product.TrusthubV1TrustProduct] = dataclasses.field(default=None)
    
