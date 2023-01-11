import dataclasses
from typing import Any,Optional
from ..shared import create_manifest_by_object_request_body as shared_create_manifest_by_object_request_body
from ..shared import create_manifest_label_ids_request_body as shared_create_manifest_label_ids_request_body
from ..shared import create_manifest_response_body as shared_create_manifest_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateManifestRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateManifestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_manifest_response_body: Optional[shared_create_manifest_response_body.CreateManifestResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
