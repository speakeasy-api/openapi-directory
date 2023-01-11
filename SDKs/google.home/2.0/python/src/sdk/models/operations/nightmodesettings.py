import dataclasses
from typing import Optional
from ..shared import nightmodesettingsrequest as shared_nightmodesettingsrequest
from ..shared import example17 as shared_example17


@dataclasses.dataclass
class NightModesettingsRequest:
    request: shared_nightmodesettingsrequest.NightModesettingsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NightModesettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example17: Optional[shared_example17.Example17] = dataclasses.field(default=None)
    
