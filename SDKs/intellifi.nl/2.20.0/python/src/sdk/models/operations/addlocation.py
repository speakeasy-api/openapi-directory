import dataclasses
from typing import Optional
from ..shared import location as shared_location
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddLocationRequest:
    request: shared_location.LocationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
