import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedclustergroup as shared_nestedclustergroup
from ..shared import nestedcluster as shared_nestedcluster
from ..shared import nestedplatform as shared_nestedplatform
from ..shared import nestedregion as shared_nestedregion
from ..shared import nesteddevicerole as shared_nesteddevicerole
from ..shared import nestedsite as shared_nestedsite
from ..shared import nestedtenantgroup as shared_nestedtenantgroup
from ..shared import nestedtenant as shared_nestedtenant


@dataclass_json
@dataclasses.dataclass
class ConfigContext:
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cluster_groups: Optional[list[shared_nestedclustergroup.NestedClusterGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_groups') }})
    clusters: Optional[list[shared_nestedcluster.NestedCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_active') }})
    platforms: Optional[list[shared_nestedplatform.NestedPlatform]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    regions: Optional[list[shared_nestedregion.NestedRegion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    roles: Optional[list[shared_nesteddevicerole.NestedDeviceRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    sites: Optional[list[shared_nestedsite.NestedSite]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant_groups: Optional[list[shared_nestedtenantgroup.NestedTenantGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant_groups') }})
    tenants: Optional[list[shared_nestedtenant.NestedTenant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenants') }})
    weight: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
