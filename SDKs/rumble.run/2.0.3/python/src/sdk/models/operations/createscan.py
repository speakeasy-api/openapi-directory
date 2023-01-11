import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scanoptions as shared_scanoptions
from ..shared import task as shared_task


@dataclasses.dataclass
class CreateScanPathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateScanSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateScanRequest:
    path_params: CreateScanPathParams = dataclasses.field()
    security: CreateScanSecurity = dataclasses.field()
    request: Optional[shared_scanoptions.ScanOptions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreateScanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task: Optional[shared_task.Task] = dataclasses.field(default=None)
    
