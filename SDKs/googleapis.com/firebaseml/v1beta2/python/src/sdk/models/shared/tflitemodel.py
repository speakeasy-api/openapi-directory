import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TfLiteModelInput:
    r"""TfLiteModelInput
    Information that is specific to TfLite models.
    """
    
    automl_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automlModel') }})
    gcs_tflite_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsTfliteUri') }})
    

@dataclass_json
@dataclasses.dataclass
class TfLiteModel:
    r"""TfLiteModel
    Information that is specific to TfLite models.
    """
    
    automl_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automlModel') }})
    gcs_tflite_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsTfliteUri') }})
    size_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    
