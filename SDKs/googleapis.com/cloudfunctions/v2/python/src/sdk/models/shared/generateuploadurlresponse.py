import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storagesource as shared_storagesource


@dataclass_json
@dataclasses.dataclass
class GenerateUploadURLResponse:
    r"""GenerateUploadURLResponse
    Response of `GenerateSourceUploadUrl` method.
    """
    
    storage_source: Optional[shared_storagesource.StorageSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageSource') }})
    upload_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadUrl') }})
    
