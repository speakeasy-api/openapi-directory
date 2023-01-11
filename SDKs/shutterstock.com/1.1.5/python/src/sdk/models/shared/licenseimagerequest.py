import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseimage as shared_licenseimage


@dataclass_json
@dataclasses.dataclass
class LicenseImageRequest:
    r"""LicenseImageRequest
    Image license request data
    """
    
    images: list[shared_licenseimage.LicenseImage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    
