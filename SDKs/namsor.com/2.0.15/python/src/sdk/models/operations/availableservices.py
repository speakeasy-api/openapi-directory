import dataclasses
from typing import Optional
from ..shared import apiservicesout as shared_apiservicesout


@dataclasses.dataclass
class AvailableServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_services_out: Optional[shared_apiservicesout.APIServicesOut] = dataclasses.field(default=None)
    
