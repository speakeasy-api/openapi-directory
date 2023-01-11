import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import majorproject as shared_majorproject


@dataclasses.dataclass
class GetMajorProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    major_projects: Optional[list[shared_majorproject.MajorProject]] = dataclasses.field(default=None)
    
