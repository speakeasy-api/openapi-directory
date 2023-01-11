import dataclasses
from typing import Optional
from ..shared import groupapplicationresult as shared_groupapplicationresult


@dataclasses.dataclass
class CancelGroupApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelGroupApplicationRequest:
    path_params: CancelGroupApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CancelGroupApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_application_result: Optional[shared_groupapplicationresult.GroupApplicationResult] = dataclasses.field(default=None)
    
