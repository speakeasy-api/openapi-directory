import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anthosobservabilitymembershipspec as shared_anthosobservabilitymembershipspec


@dataclass_json
@dataclasses.dataclass
class AnthosObservabilityFeatureSpec:
    r"""AnthosObservabilityFeatureSpec
    **Anthos Observability**: Spec
    """
    
    default_membership_spec: Optional[shared_anthosobservabilitymembershipspec.AnthosObservabilityMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMembershipSpec') }})
    
