import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appengineversionendpoint as shared_appengineversionendpoint
from ..shared import cloudfunctionendpoint as shared_cloudfunctionendpoint
from ..shared import cloudrunrevisionendpoint as shared_cloudrunrevisionendpoint

class EndpointNetworkTypeEnum(str, Enum):
    NETWORK_TYPE_UNSPECIFIED = "NETWORK_TYPE_UNSPECIFIED"
    GCP_NETWORK = "GCP_NETWORK"
    NON_GCP_NETWORK = "NON_GCP_NETWORK"


@dataclass_json
@dataclasses.dataclass
class Endpoint:
    r"""Endpoint
    Source or destination of the Connectivity Test.
    """
    
    app_engine_version: Optional[shared_appengineversionendpoint.AppEngineVersionEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineVersion') }})
    cloud_function: Optional[shared_cloudfunctionendpoint.CloudFunctionEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFunction') }})
    cloud_run_revision: Optional[shared_cloudrunrevisionendpoint.CloudRunRevisionEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunRevision') }})
    cloud_sql_instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlInstance') }})
    gke_master_cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeMasterCluster') }})
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_type: Optional[EndpointNetworkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkType') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    
