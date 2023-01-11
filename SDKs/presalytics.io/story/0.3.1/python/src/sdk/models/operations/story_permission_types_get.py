import dataclasses
from typing import Any,Optional
from ..shared import permission_type as shared_permission_type


@dataclasses.dataclass
class StoryPermissionTypesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_types: Optional[list[shared_permission_type.PermissionType]] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
