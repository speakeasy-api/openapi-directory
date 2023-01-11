import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keypair as shared_keypair


@dataclass_json
@dataclasses.dataclass
class APIKeys:
    prediction_keys: Optional[shared_keypair.KeyPair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictionKeys') }})
    training_keys: Optional[shared_keypair.KeyPair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingKeys') }})
    
