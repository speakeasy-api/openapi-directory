import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetDomainDomainnamePathParams:
    domainname: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domainname', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetDomainDomainname200ApplicationJSON:
    at_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    logo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    members: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    sub: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    

@dataclasses.dataclass
class GetDomainDomainnameRequest:
    path_params: GetDomainDomainnamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainDomainnameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_domain_domainname_200_application_json_object: Optional[GetDomainDomainname200ApplicationJSON] = dataclasses.field(default=None)
    
