import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial
    The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.
    """
    
    digest: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
