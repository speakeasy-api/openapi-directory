import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import ldapauthmoduleconfig as shared_ldapauthmoduleconfig
from ..shared import inmemoryauthmoduleconfig as shared_inmemoryauthmoduleconfig
from ..shared import genericoauth2moduleconfig as shared_genericoauth2moduleconfig


@dataclasses.dataclass
class CreateGlobalAuthModuleSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateGlobalAuthModuleRequest:
    security: CreateGlobalAuthModuleSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGlobalAuthModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_global_auth_module_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
