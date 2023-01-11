import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileuploadanswer as shared_fileuploadanswer


@dataclass_json
@dataclasses.dataclass
class FileUploadAnswers:
    r"""FileUploadAnswers
    All submitted files for a FileUpload question.
    """
    
    answers: Optional[list[shared_fileuploadanswer.FileUploadAnswer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    
