import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modelstate as shared_modelstate
from ..shared import tflitemodel as shared_tflitemodel
from ..shared import operation as shared_operation
from ..shared import tflitemodel as shared_tflitemodel


@dataclass_json
@dataclasses.dataclass
class ModelInput:
    r"""ModelInput
    An ML model hosted in Firebase ML
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[shared_modelstate.ModelState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tflite_model: Optional[shared_tflitemodel.TfLiteModelInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfliteModel') }})
    

@dataclass_json
@dataclasses.dataclass
class Model:
    r"""Model
    An ML model hosted in Firebase ML
    """
    
    active_operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeOperations') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    model_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelHash') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[shared_modelstate.ModelState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tflite_model: Optional[shared_tflitemodel.TfLiteModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfliteModel') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
