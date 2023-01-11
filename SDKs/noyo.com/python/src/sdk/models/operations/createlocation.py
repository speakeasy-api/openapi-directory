import dataclasses
from typing import Optional
from ..shared import locationcreaterequest as shared_locationcreaterequest
from ..shared import locationresult as shared_locationresult


@dataclasses.dataclass
class CreateLocationPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLocationRequest:
    path_params: CreateLocationPathParams = dataclasses.field()
    request: shared_locationcreaterequest.LocationCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_result: Optional[shared_locationresult.LocationResult] = dataclasses.field(default=None)
    
