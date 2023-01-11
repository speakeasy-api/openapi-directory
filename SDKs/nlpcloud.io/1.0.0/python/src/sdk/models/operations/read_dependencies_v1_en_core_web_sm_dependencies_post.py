import dataclasses
from typing import Optional
from ..shared import userrequestin as shared_userrequestin
from ..shared import dependenciesout as shared_dependenciesout
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class ReadDependenciesV1EnCoreWebSmDependenciesPostRequest:
    request: shared_userrequestin.UserRequestIn = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReadDependenciesV1EnCoreWebSmDependenciesPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependencies_out: Optional[shared_dependenciesout.DependenciesOut] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
