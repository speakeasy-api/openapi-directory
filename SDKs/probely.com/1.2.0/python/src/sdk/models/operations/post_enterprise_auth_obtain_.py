import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import login as shared_login


@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthObtain200ApplicationJSON:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthObtain400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthObtain500ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostEnterpriseAuthObtainRequest:
    request: shared_login.Login = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEnterpriseAuthObtainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_enterprise_auth_obtain_200_application_json_object: Optional[PostEnterpriseAuthObtain200ApplicationJSON] = dataclasses.field(default=None)
    post_enterprise_auth_obtain_400_application_json_object: Optional[PostEnterpriseAuthObtain400ApplicationJSON] = dataclasses.field(default=None)
    post_enterprise_auth_obtain_500_application_json_object: Optional[PostEnterpriseAuthObtain500ApplicationJSON] = dataclasses.field(default=None)
    
