import dataclasses
from typing import Optional


@dataclasses.dataclass
class LicensesReadPathParams:
    license_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'license_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LicensesReadRequest:
    path_params: LicensesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LicensesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
