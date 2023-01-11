import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoStatusFailureReasonEnum(str, Enum):
    CONVERSION = "conversion"
    INVALID_FILE = "invalidFile"
    EMPTY_FILE = "emptyFile"
    TOO_SMALL = "tooSmall"
    CODEC = "codec"
    UPLOAD_ABORTED = "uploadAborted"

class VideoStatusLicenseEnum(str, Enum):
    YOUTUBE = "youtube"
    CREATIVE_COMMON = "creativeCommon"

class VideoStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

class VideoStatusRejectionReasonEnum(str, Enum):
    COPYRIGHT = "copyright"
    INAPPROPRIATE = "inappropriate"
    DUPLICATE = "duplicate"
    TERMS_OF_USE = "termsOfUse"
    UPLOADER_ACCOUNT_SUSPENDED = "uploaderAccountSuspended"
    LENGTH = "length"
    CLAIM = "claim"
    UPLOADER_ACCOUNT_CLOSED = "uploaderAccountClosed"
    TRADEMARK = "trademark"
    LEGAL = "legal"

class VideoStatusUploadStatusEnum(str, Enum):
    UPLOADED = "uploaded"
    PROCESSED = "processed"
    FAILED = "failed"
    REJECTED = "rejected"
    DELETED = "deleted"


@dataclass_json
@dataclasses.dataclass
class VideoStatus:
    r"""VideoStatus
    Basic details about a video category, such as its localized title. Next Id: 18
    """
    
    embeddable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddable') }})
    failure_reason: Optional[VideoStatusFailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    license: Optional[VideoStatusLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    made_for_kids: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('madeForKids') }})
    privacy_status: Optional[VideoStatusPrivacyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyStatus') }})
    public_stats_viewable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicStatsViewable') }})
    publish_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rejection_reason: Optional[VideoStatusRejectionReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionReason') }})
    self_declared_made_for_kids: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfDeclaredMadeForKids') }})
    upload_status: Optional[VideoStatusUploadStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadStatus') }})
    
