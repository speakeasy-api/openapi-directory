import dataclasses
from typing import Optional
from ..shared import inforesponse as shared_inforesponse


@dataclasses.dataclass
class GetRouteInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    info_response: Optional[shared_inforesponse.InfoResponse] = dataclasses.field(default=None)
    
