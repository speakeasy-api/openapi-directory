import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1sentimentdata as shared_googlecloudcontactcenterinsightsv1sentimentdata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment:
    r"""GoogleCloudContactcenterinsightsV1ConversationLevelSentiment
    One channel of conversation-level sentiment data.
    """
    
    channel_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    sentiment_data: Optional[shared_googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentData') }})
    
