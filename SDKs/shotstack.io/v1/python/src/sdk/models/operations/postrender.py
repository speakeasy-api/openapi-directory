import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import edit as shared_edit
from ..shared import queuedresponse as shared_queuedresponse


@dataclasses.dataclass
class PostRenderSecurity:
    developer_key: shared_security.SchemeDeveloperKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostRenderRequest:
    request: shared_edit.Edit = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostRenderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    queued_response: Optional[shared_queuedresponse.QueuedResponse] = dataclasses.field(default=None)
    
