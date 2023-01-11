import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import site as shared_site


@dataclasses.dataclass
class GetTargetsTargetIDSitePathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSite401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSite404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDSiteRequest:
    path_params: GetTargetsTargetIDSitePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    get_targets_target_id_site_401_application_json_object: Optional[GetTargetsTargetIDSite401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_site_404_application_json_object: Optional[GetTargetsTargetIDSite404ApplicationJSON] = dataclasses.field(default=None)
    
