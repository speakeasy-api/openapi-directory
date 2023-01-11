import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationtype_enum as shared_verificationtype_enum


@dataclasses.dataclass
class PostTargetsTargetIDSiteVerifyPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDSiteVerifyRequestBody:
    type: shared_verificationtype_enum.VerificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDSiteVerify200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDSiteVerify400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDSiteVerify401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDSiteVerify403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDSiteVerify404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDSiteVerifyRequest:
    path_params: PostTargetsTargetIDSiteVerifyPathParams = dataclasses.field()
    request: PostTargetsTargetIDSiteVerifyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDSiteVerifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_target_id_site_verify_200_application_json_object: Optional[PostTargetsTargetIDSiteVerify200ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_site_verify_400_application_json_object: Optional[PostTargetsTargetIDSiteVerify400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_site_verify_401_application_json_object: Optional[PostTargetsTargetIDSiteVerify401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_site_verify_403_application_json_object: Optional[PostTargetsTargetIDSiteVerify403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_site_verify_404_application_json_object: Optional[PostTargetsTargetIDSiteVerify404ApplicationJSON] = dataclasses.field(default=None)
    
