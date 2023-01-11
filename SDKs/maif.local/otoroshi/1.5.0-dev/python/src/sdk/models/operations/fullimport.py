import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import importexport as shared_importexport
from ..shared import done as shared_done


@dataclasses.dataclass
class FullImportSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FullImportRequest:
    security: FullImportSecurity = dataclasses.field()
    request: Optional[shared_importexport.ImportExport] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FullImportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    done: Optional[shared_done.Done] = dataclasses.field(default=None)
    
