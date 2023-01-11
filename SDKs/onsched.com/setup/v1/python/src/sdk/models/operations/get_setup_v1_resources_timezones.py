import dataclasses
from typing import Optional
from ..shared import systemtimezoneviewmodel as shared_systemtimezoneviewmodel


@dataclasses.dataclass
class GetSetupV1ResourcesTimezonesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    system_timezone_view_model: Optional[shared_systemtimezoneviewmodel.SystemTimezoneViewModel] = dataclasses.field(default=None)
    
