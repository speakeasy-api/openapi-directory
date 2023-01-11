import dataclasses
from typing import Optional
from ..shared import expansionfile as shared_expansionfile


@dataclasses.dataclass
class ExpansionFilesUploadResponse:
    expansion_file: Optional[shared_expansionfile.ExpansionFile] = dataclasses.field(default=None)
    
