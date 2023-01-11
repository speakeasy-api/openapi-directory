import dataclasses
from typing import Optional
from ..shared import devicemetadata as shared_devicemetadata
from ..shared import timestamp as shared_timestamp


@dataclasses.dataclass
class UserComment:
    android_os_version: Optional[int] = dataclasses.field(default=None)
    app_version_code: Optional[int] = dataclasses.field(default=None)
    app_version_name: Optional[str] = dataclasses.field(default=None)
    device: Optional[str] = dataclasses.field(default=None)
    device_metadata: Optional[shared_devicemetadata.DeviceMetadata] = dataclasses.field(default=None)
    last_modified: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None)
    original_text: Optional[str] = dataclasses.field(default=None)
    reviewer_language: Optional[str] = dataclasses.field(default=None)
    star_rating: Optional[int] = dataclasses.field(default=None)
    text: Optional[str] = dataclasses.field(default=None)
    thumbs_down_count: Optional[int] = dataclasses.field(default=None)
    thumbs_up_count: Optional[int] = dataclasses.field(default=None)
    
