import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import orgresponse as shared_orgresponse


@dataclasses.dataclass
class GetOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    org_response: Optional[shared_orgresponse.OrgResponse] = dataclasses.field(default=None)
    
