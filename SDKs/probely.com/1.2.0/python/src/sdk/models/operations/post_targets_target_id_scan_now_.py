import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scan as shared_scan


@dataclasses.dataclass
class PostTargetsTargetIDScanNowPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    
class PostTargetsTargetIDScanNowRequestBodyScanProfileEnum(str, Enum):
    SAFE = "safe"
    NORMAL = "normal"
    FULL = "full"
    LIGHTNING = "lightning"


@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScanNowRequestBody:
    scan_profile: Optional[PostTargetsTargetIDScanNowRequestBodyScanProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan_profile') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScanNow400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScanNow401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScanNow403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScanNow404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDScanNowRequest:
    path_params: PostTargetsTargetIDScanNowPathParams = dataclasses.field()
    request: Optional[PostTargetsTargetIDScanNowRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDScanNowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scan: Optional[shared_scan.Scan] = dataclasses.field(default=None)
    post_targets_target_id_scan_now_400_application_json_object: Optional[PostTargetsTargetIDScanNow400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_scan_now_401_application_json_object: Optional[PostTargetsTargetIDScanNow401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_scan_now_403_application_json_object: Optional[PostTargetsTargetIDScanNow403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_scan_now_404_application_json_object: Optional[PostTargetsTargetIDScanNow404ApplicationJSON] = dataclasses.field(default=None)
    
