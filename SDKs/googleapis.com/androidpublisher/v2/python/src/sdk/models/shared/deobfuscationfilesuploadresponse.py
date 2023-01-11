import dataclasses
from typing import Optional
from ..shared import deobfuscationfile as shared_deobfuscationfile


@dataclasses.dataclass
class DeobfuscationFilesUploadResponse:
    deobfuscation_file: Optional[shared_deobfuscationfile.DeobfuscationFile] = dataclasses.field(default=None)
    
