import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grafeasv1slsaprovenancezerotwoslsaconfigsource as shared_grafeasv1slsaprovenancezerotwoslsaconfigsource


@dataclass_json
@dataclasses.dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation
    Identifies the event that kicked off the build.
    """
    
    config_source: Optional[shared_grafeasv1slsaprovenancezerotwoslsaconfigsource.GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSource') }})
    environment: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
