import dataclasses
from typing import Optional
from ..shared import spotsetcreate as shared_spotsetcreate
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class PostSpotsetsRequest:
    request: shared_spotsetcreate.SpotSetCreateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSpotsetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
