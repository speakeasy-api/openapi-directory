import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata as shared_googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata
from ..shared import googlecloudcontactcenterinsightsv1conversationparticipant as shared_googlecloudcontactcenterinsightsv1conversationparticipant
from ..shared import googlecloudcontactcenterinsightsv1sentimentdata as shared_googlecloudcontactcenterinsightsv1sentimentdata
from ..shared import googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo as shared_googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment:
    r"""GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment
    A segment of a full transcript.
    """
    
    channel_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    dialogflow_segment_metadata: Optional[shared_googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowSegmentMetadata') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    message_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTime') }})
    segment_participant: Optional[shared_googlecloudcontactcenterinsightsv1conversationparticipant.GoogleCloudContactcenterinsightsV1ConversationParticipant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentParticipant') }})
    sentiment: Optional[shared_googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    words: Optional[list[shared_googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
