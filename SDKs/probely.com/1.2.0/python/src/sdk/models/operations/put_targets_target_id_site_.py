import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import site as shared_site
from ..shared import site as shared_site


@dataclasses.dataclass
class PutTargetsTargetIDSitePathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDSite400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDSite401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDSite403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDSite404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutTargetsTargetIDSiteRequest:
    path_params: PutTargetsTargetIDSitePathParams = dataclasses.field()
    request: shared_site.SiteInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutTargetsTargetIDSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    put_targets_target_id_site_400_application_json_object: Optional[PutTargetsTargetIDSite400ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_site_401_application_json_object: Optional[PutTargetsTargetIDSite401ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_site_403_application_json_object: Optional[PutTargetsTargetIDSite403ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_site_404_application_json_object: Optional[PutTargetsTargetIDSite404ApplicationJSON] = dataclasses.field(default=None)
    
