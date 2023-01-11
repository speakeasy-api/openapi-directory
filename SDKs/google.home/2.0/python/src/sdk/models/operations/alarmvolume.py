import dataclasses
from typing import Optional
from ..shared import alarmvolumerequest as shared_alarmvolumerequest
from ..shared import getvolume as shared_getvolume


@dataclasses.dataclass
class AlarmVolumeRequest:
    request: shared_alarmvolumerequest.AlarmVolumeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AlarmVolumeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getvolume: Optional[shared_getvolume.Getvolume] = dataclasses.field(default=None)
    
