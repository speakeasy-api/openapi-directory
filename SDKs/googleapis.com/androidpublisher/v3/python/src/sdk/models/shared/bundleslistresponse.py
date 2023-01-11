import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bundle as shared_bundle


@dataclass_json
@dataclasses.dataclass
class BundlesListResponse:
    r"""BundlesListResponse
    Response listing all app bundles.
    """
    
    bundles: Optional[list[shared_bundle.Bundle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
