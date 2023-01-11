import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SentimentPredictRequest:
    document: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }, 'multipart_form': { 'field_name': 'document' }})
    model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelId') }, 'multipart_form': { 'field_name': 'modelId' }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numResults') }, 'multipart_form': { 'field_name': 'numResults' }})
    sample_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleId') }, 'multipart_form': { 'field_name': 'sampleId' }})
    
