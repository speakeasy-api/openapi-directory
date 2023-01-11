import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class V2LanguageTrainParams:
    r"""V2LanguageTrainParams
    JSON that contains parameters that specify how the model is created
    """
    
    train_split_ratio: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainSplitRatio') }})
    with_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withFeedback') }})
    with_global_dataset_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withGlobalDatasetId') }})
    
