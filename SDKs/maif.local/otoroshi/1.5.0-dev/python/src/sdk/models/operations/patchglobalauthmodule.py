import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import ldapauthmoduleconfig as shared_ldapauthmoduleconfig
from ..shared import inmemoryauthmoduleconfig as shared_inmemoryauthmoduleconfig
from ..shared import genericoauth2moduleconfig as shared_genericoauth2moduleconfig


@dataclasses.dataclass
class PatchGlobalAuthModulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchGlobalAuthModuleSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchGlobalAuthModuleRequest:
    path_params: PatchGlobalAuthModulePathParams = dataclasses.field()
    security: PatchGlobalAuthModuleSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchGlobalAuthModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_global_auth_module_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
