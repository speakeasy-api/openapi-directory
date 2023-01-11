import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import ldapauthmoduleconfig as shared_ldapauthmoduleconfig
from ..shared import inmemoryauthmoduleconfig as shared_inmemoryauthmoduleconfig
from ..shared import genericoauth2moduleconfig as shared_genericoauth2moduleconfig


@dataclasses.dataclass
class FindGlobalAuthModuleByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindGlobalAuthModuleByIDSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindGlobalAuthModuleByIDRequest:
    path_params: FindGlobalAuthModuleByIDPathParams = dataclasses.field()
    security: FindGlobalAuthModuleByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindGlobalAuthModuleByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    find_global_auth_module_by_id_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
