import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videoprocessingdetailsprocessingprogress as shared_videoprocessingdetailsprocessingprogress

class VideoProcessingDetailsProcessingFailureReasonEnum(str, Enum):
    UPLOAD_FAILED = "uploadFailed"
    TRANSCODE_FAILED = "transcodeFailed"
    STREAMING_FAILED = "streamingFailed"
    OTHER = "other"

class VideoProcessingDetailsProcessingStatusEnum(str, Enum):
    PROCESSING = "processing"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    TERMINATED = "terminated"


@dataclass_json
@dataclasses.dataclass
class VideoProcessingDetails:
    r"""VideoProcessingDetails
    Describes processing status and progress and availability of some other Video resource parts.
    """
    
    editor_suggestions_availability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorSuggestionsAvailability') }})
    file_details_availability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDetailsAvailability') }})
    processing_failure_reason: Optional[VideoProcessingDetailsProcessingFailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingFailureReason') }})
    processing_issues_availability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingIssuesAvailability') }})
    processing_progress: Optional[shared_videoprocessingdetailsprocessingprogress.VideoProcessingDetailsProcessingProgress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingProgress') }})
    processing_status: Optional[VideoProcessingDetailsProcessingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingStatus') }})
    tag_suggestions_availability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagSuggestionsAvailability') }})
    thumbnails_availability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailsAvailability') }})
    
