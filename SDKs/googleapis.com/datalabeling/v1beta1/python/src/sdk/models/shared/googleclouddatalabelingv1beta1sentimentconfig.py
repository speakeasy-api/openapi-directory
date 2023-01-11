import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1SentimentConfig:
    r"""GoogleCloudDatalabelingV1beta1SentimentConfig
    Config for setting up sentiments.
    """
    
    enable_label_sentiment_selection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableLabelSentimentSelection') }})
    
