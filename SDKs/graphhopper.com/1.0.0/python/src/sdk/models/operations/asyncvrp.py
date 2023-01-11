import dataclasses
from typing import Optional
from ..shared import request as shared_request
from ..shared import badrequest as shared_badrequest
from ..shared import internalerrormessage as shared_internalerrormessage
from ..shared import jobid as shared_jobid


@dataclasses.dataclass
class AsyncVrpRequest:
    request: shared_request.Request = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AsyncVrpResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[shared_badrequest.BadRequest] = dataclasses.field(default=None)
    internal_error_message: Optional[shared_internalerrormessage.InternalErrorMessage] = dataclasses.field(default=None)
    job_id: Optional[shared_jobid.JobID] = dataclasses.field(default=None)
    
