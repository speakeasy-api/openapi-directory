import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1PdfInstruction:
    r"""GoogleCloudDatalabelingV1beta1PdfInstruction
    Instruction from a PDF file.
    """
    
    gcs_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFileUri') }})
    
