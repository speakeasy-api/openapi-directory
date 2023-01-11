import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import ldapauthmoduleconfig as shared_ldapauthmoduleconfig
from ..shared import inmemoryauthmoduleconfig as shared_inmemoryauthmoduleconfig
from ..shared import genericoauth2moduleconfig as shared_genericoauth2moduleconfig


@dataclasses.dataclass
class UpdateGlobalAuthModulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateGlobalAuthModuleSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateGlobalAuthModuleRequest:
    path_params: UpdateGlobalAuthModulePathParams = dataclasses.field()
    security: UpdateGlobalAuthModuleSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateGlobalAuthModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_global_auth_module_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
