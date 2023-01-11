import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import osimage as shared_osimage


@dataclass_json
@dataclasses.dataclass
class FetchInstanceProvisioningSettingsResponse:
    r"""FetchInstanceProvisioningSettingsResponse
    Response with all provisioning settings.
    """
    
    images: Optional[list[shared_osimage.OsImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    
