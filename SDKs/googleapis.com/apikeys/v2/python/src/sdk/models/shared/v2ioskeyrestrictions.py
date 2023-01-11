import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class V2IosKeyRestrictions:
    r"""V2IosKeyRestrictions
    The iOS apps that are allowed to use the key.
    """
    
    allowed_bundle_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedBundleIds') }})
    
