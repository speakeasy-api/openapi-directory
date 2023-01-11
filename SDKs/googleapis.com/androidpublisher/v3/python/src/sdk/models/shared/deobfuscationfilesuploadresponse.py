import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deobfuscationfile as shared_deobfuscationfile


@dataclass_json
@dataclasses.dataclass
class DeobfuscationFilesUploadResponse:
    r"""DeobfuscationFilesUploadResponse
    Responses for the upload.
    """
    
    deobfuscation_file: Optional[shared_deobfuscationfile.DeobfuscationFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deobfuscationFile') }})
    
