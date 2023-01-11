import dataclasses
from typing import Optional
from ..shared import locationeditrequest as shared_locationeditrequest
from ..shared import locationresult as shared_locationresult


@dataclasses.dataclass
class EditLocationPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditLocationRequest:
    path_params: EditLocationPathParams = dataclasses.field()
    request: shared_locationeditrequest.LocationEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_result: Optional[shared_locationresult.LocationResult] = dataclasses.field(default=None)
    
