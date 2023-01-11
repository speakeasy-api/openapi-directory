import dataclasses
from typing import Optional
from ..shared import getsyncresponse as shared_getsyncresponse


@dataclasses.dataclass
class GetSyncResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sync_response: Optional[shared_getsyncresponse.GetSyncResponse] = dataclasses.field(default=None)
    
