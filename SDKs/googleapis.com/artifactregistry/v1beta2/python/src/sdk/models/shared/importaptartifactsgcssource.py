import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportAptArtifactsGcsSource:
    r"""ImportAptArtifactsGcsSource
    Google Cloud Storage location where the artifacts currently reside.
    """
    
    uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    use_wildcards: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useWildcards') }})
    
