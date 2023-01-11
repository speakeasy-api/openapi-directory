import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anthosobservabilityfeaturespec as shared_anthosobservabilityfeaturespec
from ..shared import multiclusteringressfeaturespec as shared_multiclusteringressfeaturespec


@dataclass_json
@dataclasses.dataclass
class CommonFeatureSpec:
    r"""CommonFeatureSpec
    CommonFeatureSpec contains Hub-wide configuration information
    """
    
    anthosobservability: Optional[shared_anthosobservabilityfeaturespec.AnthosObservabilityFeatureSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosobservability') }})
    appdevexperience: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    multiclusteringress: Optional[shared_multiclusteringressfeaturespec.MultiClusterIngressFeatureSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiclusteringress') }})
    
