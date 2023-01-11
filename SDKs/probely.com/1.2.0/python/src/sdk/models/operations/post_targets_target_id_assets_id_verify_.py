import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationtype_enum as shared_verificationtype_enum


@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerifyPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerifyRequestBody:
    type: shared_verificationtype_enum.VerificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerify200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerify400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerify401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerify403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerify404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerifyRequest:
    path_params: PostTargetsTargetIDAssetsIDVerifyPathParams = dataclasses.field()
    request: PostTargetsTargetIDAssetsIDVerifyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDAssetsIDVerifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_target_id_assets_id_verify_200_application_json_object: Optional[PostTargetsTargetIDAssetsIDVerify200ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_assets_id_verify_400_application_json_object: Optional[PostTargetsTargetIDAssetsIDVerify400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_assets_id_verify_401_application_json_object: Optional[PostTargetsTargetIDAssetsIDVerify401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_assets_id_verify_403_application_json_object: Optional[PostTargetsTargetIDAssetsIDVerify403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_assets_id_verify_404_application_json_object: Optional[PostTargetsTargetIDAssetsIDVerify404ApplicationJSON] = dataclasses.field(default=None)
    
