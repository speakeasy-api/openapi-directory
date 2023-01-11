import dataclasses
from typing import Optional
from ..shared import continuousprojectslist as shared_continuousprojectslist


@dataclasses.dataclass
class GetContinuousProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    continuous_projects_list: Optional[shared_continuousprojectslist.ContinuousProjectsList] = dataclasses.field(default=None)
    
