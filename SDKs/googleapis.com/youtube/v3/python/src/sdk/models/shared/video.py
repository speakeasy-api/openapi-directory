import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videoagegating as shared_videoagegating
from ..shared import videocontentdetails as shared_videocontentdetails
from ..shared import videofiledetails as shared_videofiledetails
from ..shared import videolivestreamingdetails as shared_videolivestreamingdetails
from ..shared import videolocalization as shared_videolocalization
from ..shared import videomonetizationdetails as shared_videomonetizationdetails
from ..shared import videoplayer as shared_videoplayer
from ..shared import videoprocessingdetails as shared_videoprocessingdetails
from ..shared import videorecordingdetails as shared_videorecordingdetails
from ..shared import videosnippet as shared_videosnippet
from ..shared import videostatistics as shared_videostatistics
from ..shared import videostatus as shared_videostatus
from ..shared import videosuggestions as shared_videosuggestions
from ..shared import videotopicdetails as shared_videotopicdetails


@dataclass_json
@dataclasses.dataclass
class Video:
    r"""Video
    A *video* resource represents a YouTube video.
    """
    
    age_gating: Optional[shared_videoagegating.VideoAgeGating] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageGating') }})
    content_details: Optional[shared_videocontentdetails.VideoContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_details: Optional[shared_videofiledetails.VideoFileDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDetails') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    live_streaming_details: Optional[shared_videolivestreamingdetails.VideoLiveStreamingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveStreamingDetails') }})
    localizations: Optional[dict[str, shared_videolocalization.VideoLocalization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    monetization_details: Optional[shared_videomonetizationdetails.VideoMonetizationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monetizationDetails') }})
    player: Optional[shared_videoplayer.VideoPlayer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    processing_details: Optional[shared_videoprocessingdetails.VideoProcessingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingDetails') }})
    project_details: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectDetails') }})
    recording_details: Optional[shared_videorecordingdetails.VideoRecordingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingDetails') }})
    snippet: Optional[shared_videosnippet.VideoSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    statistics: Optional[shared_videostatistics.VideoStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[shared_videostatus.VideoStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suggestions: Optional[shared_videosuggestions.VideoSuggestions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    topic_details: Optional[shared_videotopicdetails.VideoTopicDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicDetails') }})
    
