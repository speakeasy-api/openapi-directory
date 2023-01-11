import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment as shared_googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscript:
    r"""GoogleCloudContactcenterinsightsV1ConversationTranscript
    A message representing the transcript of a conversation.
    """
    
    transcript_segments: Optional[list[shared_googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptSegments') }})
    
