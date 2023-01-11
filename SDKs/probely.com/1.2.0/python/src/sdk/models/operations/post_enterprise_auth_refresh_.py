import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthRefreshRequestBody:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthRefresh200ApplicationJSON:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthRefresh400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthRefresh500ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostEnterpriseAuthRefreshRequest:
    request: PostEnterpriseAuthRefreshRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEnterpriseAuthRefreshResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_enterprise_auth_refresh_200_application_json_object: Optional[PostEnterpriseAuthRefresh200ApplicationJSON] = dataclasses.field(default=None)
    post_enterprise_auth_refresh_400_application_json_object: Optional[PostEnterpriseAuthRefresh400ApplicationJSON] = dataclasses.field(default=None)
    post_enterprise_auth_refresh_500_application_json_object: Optional[PostEnterpriseAuthRefresh500ApplicationJSON] = dataclasses.field(default=None)
    
