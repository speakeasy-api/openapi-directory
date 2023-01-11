import dataclasses
from typing import Optional
from ..shared import userrequestin as shared_userrequestin
from ..shared import entitiesout as shared_entitiesout
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class ReadEntitiesV1EnCoreWebSmEntitiesPostRequest:
    request: shared_userrequestin.UserRequestIn = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReadEntitiesV1EnCoreWebSmEntitiesPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entities_out: Optional[shared_entitiesout.EntitiesOut] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
