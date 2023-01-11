import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import moodlist as shared_moodlist


@dataclasses.dataclass
class ListMoodsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListMoodsRequest:
    security: ListMoodsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListMoodsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    mood_list: Optional[shared_moodlist.MoodList] = dataclasses.field(default=None)
    
