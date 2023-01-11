import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclasses.dataclass
class GetTargetsTargetIDAssetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDAssetsID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDAssetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDAssetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDAssetsIDRequest:
    path_params: GetTargetsTargetIDAssetsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDAssetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    get_targets_target_id_assets_id_400_application_json_object: Optional[GetTargetsTargetIDAssetsID400ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_assets_id_401_application_json_object: Optional[GetTargetsTargetIDAssetsID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_assets_id_404_application_json_object: Optional[GetTargetsTargetIDAssetsID404ApplicationJSON] = dataclasses.field(default=None)
    
