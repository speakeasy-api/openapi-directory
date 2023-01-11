import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaImportErrorConfig:
    r"""GoogleCloudDiscoveryengineV1betaImportErrorConfig
    Configuration of destination for Import related errors.
    """
    
    gcs_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsPrefix') }})
    
