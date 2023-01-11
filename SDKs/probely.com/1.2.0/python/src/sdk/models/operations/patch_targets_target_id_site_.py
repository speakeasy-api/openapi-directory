import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import site as shared_site
from ..shared import site as shared_site


@dataclasses.dataclass
class PatchTargetsTargetIDSitePathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDSite400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDSite401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDSite403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDSite404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDSiteRequest:
    path_params: PatchTargetsTargetIDSitePathParams = dataclasses.field()
    request: shared_site.SiteInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    patch_targets_target_id_site_400_application_json_object: Optional[PatchTargetsTargetIDSite400ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_site_401_application_json_object: Optional[PatchTargetsTargetIDSite401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_site_403_application_json_object: Optional[PatchTargetsTargetIDSite403ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_site_404_application_json_object: Optional[PatchTargetsTargetIDSite404ApplicationJSON] = dataclasses.field(default=None)
    
