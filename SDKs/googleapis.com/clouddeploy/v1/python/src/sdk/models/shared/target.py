import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anthoscluster as shared_anthoscluster
from ..shared import executionconfig as shared_executionconfig
from ..shared import gkecluster as shared_gkecluster
from ..shared import cloudrunlocation as shared_cloudrunlocation


@dataclass_json
@dataclasses.dataclass
class Target:
    r"""Target
    A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    anthos_cluster: Optional[shared_anthoscluster.AnthosCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosCluster') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_configs: Optional[list[shared_executionconfig.ExecutionConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfigs') }})
    gke: Optional[shared_gkecluster.GkeCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gke') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    require_approval: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireApproval') }})
    run: Optional[shared_cloudrunlocation.CloudRunLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    target_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class TargetInput:
    r"""TargetInput
    A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    anthos_cluster: Optional[shared_anthoscluster.AnthosCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosCluster') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_configs: Optional[list[shared_executionconfig.ExecutionConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfigs') }})
    gke: Optional[shared_gkecluster.GkeCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gke') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    require_approval: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireApproval') }})
    run: Optional[shared_cloudrunlocation.CloudRunLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    
