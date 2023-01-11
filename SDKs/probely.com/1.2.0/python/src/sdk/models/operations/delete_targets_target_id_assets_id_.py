import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteTargetsTargetIDAssetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDAssetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDAssetsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDAssetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteTargetsTargetIDAssetsIDRequest:
    path_params: DeleteTargetsTargetIDAssetsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTargetsTargetIDAssetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_targets_target_id_assets_id_401_application_json_object: Optional[DeleteTargetsTargetIDAssetsID401ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_target_id_assets_id_403_application_json_object: Optional[DeleteTargetsTargetIDAssetsID403ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_target_id_assets_id_404_application_json_object: Optional[DeleteTargetsTargetIDAssetsID404ApplicationJSON] = dataclasses.field(default=None)
    
