import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdTechnologyProviders:
    r"""AdTechnologyProviders
    Detected ad technology provider information.
    """
    
    detected_provider_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedProviderIds') }})
    has_unidentified_provider: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUnidentifiedProvider') }})
    
