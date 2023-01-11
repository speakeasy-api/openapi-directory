import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateinfo as shared_certificateinfo


@dataclass_json
@dataclasses.dataclass
class AndroidAppAsset:
    r"""AndroidAppAsset
    Describes an android app asset.
    """
    
    certificate: Optional[shared_certificateinfo.CertificateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
