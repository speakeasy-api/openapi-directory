import dataclasses
from typing import Optional
from ..shared import spotsetcreate as shared_spotsetcreate
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddSpotSetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddSpotSetRequest:
    path_params: AddSpotSetPathParams = dataclasses.field()
    request: shared_spotsetcreate.SpotSetCreateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddSpotSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
