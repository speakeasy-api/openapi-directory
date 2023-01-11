import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset
from ..shared import asset as shared_asset


@dataclasses.dataclass
class PutTargetsTargetIDAssetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDAssetsID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDAssetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDAssetsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDAssetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutTargetsTargetIDAssetsIDRequest:
    path_params: PutTargetsTargetIDAssetsIDPathParams = dataclasses.field()
    request: shared_asset.AssetInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutTargetsTargetIDAssetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    put_targets_target_id_assets_id_400_application_json_object: Optional[PutTargetsTargetIDAssetsID400ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_assets_id_401_application_json_object: Optional[PutTargetsTargetIDAssetsID401ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_assets_id_403_application_json_object: Optional[PutTargetsTargetIDAssetsID403ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_assets_id_404_application_json_object: Optional[PutTargetsTargetIDAssetsID404ApplicationJSON] = dataclasses.field(default=None)
    
