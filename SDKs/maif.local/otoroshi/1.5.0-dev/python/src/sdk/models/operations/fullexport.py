import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import importexport as shared_importexport


@dataclasses.dataclass
class FullExportSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FullExportRequest:
    security: FullExportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FullExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_export: Optional[shared_importexport.ImportExport] = dataclasses.field(default=None)
    
