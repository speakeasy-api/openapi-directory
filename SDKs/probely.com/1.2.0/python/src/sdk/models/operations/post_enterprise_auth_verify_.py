import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthVerifyRequestBody:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthVerify200ApplicationJSON:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthVerify400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostEnterpriseAuthVerify500ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostEnterpriseAuthVerifyRequest:
    request: PostEnterpriseAuthVerifyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEnterpriseAuthVerifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_enterprise_auth_verify_200_application_json_object: Optional[PostEnterpriseAuthVerify200ApplicationJSON] = dataclasses.field(default=None)
    post_enterprise_auth_verify_400_application_json_object: Optional[PostEnterpriseAuthVerify400ApplicationJSON] = dataclasses.field(default=None)
    post_enterprise_auth_verify_500_application_json_object: Optional[PostEnterpriseAuthVerify500ApplicationJSON] = dataclasses.field(default=None)
    
