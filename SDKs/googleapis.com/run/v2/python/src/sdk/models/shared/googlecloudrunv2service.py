import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2binaryauthorization as shared_googlecloudrunv2binaryauthorization
from ..shared import googlecloudrunv2revisiontemplate as shared_googlecloudrunv2revisiontemplate
from ..shared import googlecloudrunv2condition as shared_googlecloudrunv2condition
from ..shared import googlecloudrunv2traffictarget as shared_googlecloudrunv2traffictarget
from ..shared import googlecloudrunv2traffictargetstatus as shared_googlecloudrunv2traffictargetstatus

class GoogleCloudRunV2ServiceIngressEnum(str, Enum):
    INGRESS_TRAFFIC_UNSPECIFIED = "INGRESS_TRAFFIC_UNSPECIFIED"
    INGRESS_TRAFFIC_ALL = "INGRESS_TRAFFIC_ALL"
    INGRESS_TRAFFIC_INTERNAL_ONLY = "INGRESS_TRAFFIC_INTERNAL_ONLY"
    INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"

class GoogleCloudRunV2ServiceLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ServiceInput:
    r"""GoogleCloudRunV2ServiceInput
    Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    binary_authorization: Optional[shared_googlecloudrunv2binaryauthorization.GoogleCloudRunV2BinaryAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ingress: Optional[GoogleCloudRunV2ServiceIngressEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingress') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[GoogleCloudRunV2ServiceLaunchStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[shared_googlecloudrunv2revisiontemplate.GoogleCloudRunV2RevisionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    terminal_condition: Optional[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminalCondition') }})
    traffic: Optional[list[shared_googlecloudrunv2traffictarget.GoogleCloudRunV2TrafficTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2Service:
    r"""GoogleCloudRunV2Service
    Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    binary_authorization: Optional[shared_googlecloudrunv2binaryauthorization.GoogleCloudRunV2BinaryAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    conditions: Optional[list[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    ingress: Optional[GoogleCloudRunV2ServiceIngressEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingress') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_modifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifier') }})
    latest_created_revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedRevision') }})
    latest_ready_revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestReadyRevision') }})
    launch_stage: Optional[GoogleCloudRunV2ServiceLaunchStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    reconciling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    template: Optional[shared_googlecloudrunv2revisiontemplate.GoogleCloudRunV2RevisionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    terminal_condition: Optional[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminalCondition') }})
    traffic: Optional[list[shared_googlecloudrunv2traffictarget.GoogleCloudRunV2TrafficTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    traffic_statuses: Optional[list[shared_googlecloudrunv2traffictargetstatus.GoogleCloudRunV2TrafficTargetStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficStatuses') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
