import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedzoneprivatevisibilityconfiggkecluster as shared_managedzoneprivatevisibilityconfiggkecluster
from ..shared import managedzoneprivatevisibilityconfignetwork as shared_managedzoneprivatevisibilityconfignetwork


@dataclass_json
@dataclasses.dataclass
class ManagedZonePrivateVisibilityConfig:
    gke_clusters: Optional[list[shared_managedzoneprivatevisibilityconfiggkecluster.ManagedZonePrivateVisibilityConfigGkeCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusters') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    networks: Optional[list[shared_managedzoneprivatevisibilityconfignetwork.ManagedZonePrivateVisibilityConfigNetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    
