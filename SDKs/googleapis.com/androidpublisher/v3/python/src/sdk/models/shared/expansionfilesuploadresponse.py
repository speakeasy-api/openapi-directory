import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expansionfile as shared_expansionfile


@dataclass_json
@dataclasses.dataclass
class ExpansionFilesUploadResponse:
    r"""ExpansionFilesUploadResponse
    Response for uploading an expansion file.
    """
    
    expansion_file: Optional[shared_expansionfile.ExpansionFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expansionFile') }})
    
