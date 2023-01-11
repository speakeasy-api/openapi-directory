import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import ldapauthmoduleconfig as shared_ldapauthmoduleconfig
from ..shared import inmemoryauthmoduleconfig as shared_inmemoryauthmoduleconfig
from ..shared import genericoauth2moduleconfig as shared_genericoauth2moduleconfig


@dataclasses.dataclass
class FindAllGlobalAuthModulesSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindAllGlobalAuthModulesRequest:
    security: FindAllGlobalAuthModulesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindAllGlobalAuthModulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    find_all_global_auth_modules_200_application_json_oneoves: Optional[list[Any]] = dataclasses.field(default=None)
    
