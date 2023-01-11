import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extractionrules as shared_extractionrules


@dataclass_json
@dataclasses.dataclass
class EgressControlConfig:
    r"""EgressControlConfig
    Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
    """
    
    backends: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    extraction_rules: Optional[shared_extractionrules.ExtractionRules] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractionRules') }})
    
