import dataclasses
from typing import Optional
from ..shared import deletealarmsandtimersrequest as shared_deletealarmsandtimersrequest
from ..shared import example19 as shared_example19


@dataclasses.dataclass
class DeleteAlarmsandTimersRequest:
    request: shared_deletealarmsandtimersrequest.DeleteAlarmsandTimersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteAlarmsandTimersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example19: Optional[shared_example19.Example19] = dataclasses.field(default=None)
    
