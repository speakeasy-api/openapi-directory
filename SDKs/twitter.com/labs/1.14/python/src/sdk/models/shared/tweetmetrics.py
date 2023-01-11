import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tweetinteractionmetrics as shared_tweetinteractionmetrics
from ..shared import videometrics as shared_videometrics


@dataclass_json
@dataclasses.dataclass
class TweetMetrics:
    r"""TweetMetrics
    Metrics for a Tweet.
    """
    
    tweet: shared_tweetinteractionmetrics.TweetInteractionMetrics = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tweet') }})
    tweet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tweet_id') }})
    video: Optional[shared_videometrics.VideoMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
