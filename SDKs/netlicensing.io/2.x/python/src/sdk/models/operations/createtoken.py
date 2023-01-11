import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class CreateTokenRequestBodyActionEnum(str, Enum):
    LICENSEE_LOGIN = "licenseeLogin"

class CreateTokenRequestBodyAPIKeyRoleEnum(str, Enum):
    ROLE_APIKEY_LICENSEE = "ROLE_APIKEY_LICENSEE"
    ROLE_APIKEY_ANALYTICS = "ROLE_APIKEY_ANALYTICS"
    ROLE_APIKEY_OPERATION = "ROLE_APIKEY_OPERATION"
    ROLE_APIKEY_MAINTENANCE = "ROLE_APIKEY_MAINTENANCE"
    ROLE_APIKEY_ADMIN = "ROLE_APIKEY_ADMIN"

class CreateTokenRequestBodyTokenTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SHOP = "SHOP"
    APIKEY = "APIKEY"

class CreateTokenRequestBodyTypeEnum(str, Enum):
    ACTION = "ACTION"


@dataclasses.dataclass
class CreateTokenRequestBody:
    token_type: CreateTokenRequestBodyTokenTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'tokenType' }})
    action: Optional[CreateTokenRequestBodyActionEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'action' }})
    api_key_role: Optional[CreateTokenRequestBodyAPIKeyRoleEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'apiKeyRole' }})
    cancel_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'cancelURL' }})
    cancel_url_title: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'cancelURLTitle' }})
    license_template_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseTemplateNumber' }})
    licensee_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseeNumber' }})
    predefined_shopping_item: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'predefinedShoppingItem' }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'privateKey' }})
    product_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    success_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'successURL' }})
    success_url_title: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'successURLTitle' }})
    type: Optional[CreateTokenRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class CreateTokenSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTokenRequest:
    request: CreateTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
