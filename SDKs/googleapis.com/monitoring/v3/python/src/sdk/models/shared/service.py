import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appengine as shared_appengine
from ..shared import basicservice as shared_basicservice
from ..shared import cloudendpoints as shared_cloudendpoints
from ..shared import cloudrun as shared_cloudrun
from ..shared import clusteristio as shared_clusteristio
from ..shared import gkenamespace as shared_gkenamespace
from ..shared import gkeservice as shared_gkeservice
from ..shared import gkeworkload as shared_gkeworkload
from ..shared import istiocanonicalservice as shared_istiocanonicalservice
from ..shared import meshistio as shared_meshistio
from ..shared import telemetry as shared_telemetry
from ..shared import gkenamespace as shared_gkenamespace
from ..shared import gkeservice as shared_gkeservice
from ..shared import gkeworkload as shared_gkeworkload


@dataclass_json
@dataclasses.dataclass
class Service:
    r"""Service
    A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
    """
    
    app_engine: Optional[shared_appengine.AppEngine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngine') }})
    basic_service: Optional[shared_basicservice.BasicService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicService') }})
    cloud_endpoints: Optional[shared_cloudendpoints.CloudEndpoints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudEndpoints') }})
    cloud_run: Optional[shared_cloudrun.CloudRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    cluster_istio: Optional[shared_clusteristio.ClusterIstio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIstio') }})
    custom: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gke_namespace: Optional[shared_gkenamespace.GkeNamespace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeNamespace') }})
    gke_service: Optional[shared_gkeservice.GkeService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeService') }})
    gke_workload: Optional[shared_gkeworkload.GkeWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeWorkload') }})
    istio_canonical_service: Optional[shared_istiocanonicalservice.IstioCanonicalService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioCanonicalService') }})
    mesh_istio: Optional[shared_meshistio.MeshIstio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshIstio') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    telemetry: Optional[shared_telemetry.Telemetry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetry') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    

@dataclass_json
@dataclasses.dataclass
class ServiceInput:
    r"""ServiceInput
    A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
    """
    
    app_engine: Optional[shared_appengine.AppEngine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngine') }})
    basic_service: Optional[shared_basicservice.BasicService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicService') }})
    cloud_endpoints: Optional[shared_cloudendpoints.CloudEndpoints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudEndpoints') }})
    cloud_run: Optional[shared_cloudrun.CloudRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    cluster_istio: Optional[shared_clusteristio.ClusterIstio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIstio') }})
    custom: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gke_namespace: Optional[shared_gkenamespace.GkeNamespaceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeNamespace') }})
    gke_service: Optional[shared_gkeservice.GkeServiceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeService') }})
    gke_workload: Optional[shared_gkeworkload.GkeWorkloadInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeWorkload') }})
    istio_canonical_service: Optional[shared_istiocanonicalservice.IstioCanonicalService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioCanonicalService') }})
    mesh_istio: Optional[shared_meshistio.MeshIstio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshIstio') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    telemetry: Optional[shared_telemetry.Telemetry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetry') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
