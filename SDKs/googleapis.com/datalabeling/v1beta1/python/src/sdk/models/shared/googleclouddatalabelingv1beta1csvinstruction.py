import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1CsvInstruction:
    r"""GoogleCloudDatalabelingV1beta1CsvInstruction
    Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
    """
    
    gcs_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFileUri') }})
    
