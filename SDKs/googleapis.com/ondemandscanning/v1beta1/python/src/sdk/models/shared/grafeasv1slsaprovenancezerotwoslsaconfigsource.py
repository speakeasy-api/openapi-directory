import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource
    Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
    """
    
    digest: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    entry_point: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
