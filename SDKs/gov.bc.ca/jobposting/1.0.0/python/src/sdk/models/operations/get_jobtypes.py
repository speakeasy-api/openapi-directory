import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import jobtype as shared_jobtype


@dataclasses.dataclass
class GetJobTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    job_types: Optional[list[shared_jobtype.JobType]] = dataclasses.field(default=None)
    
