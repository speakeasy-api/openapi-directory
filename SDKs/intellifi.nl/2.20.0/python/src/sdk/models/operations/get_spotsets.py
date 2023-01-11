import dataclasses
from typing import Optional
from ..shared import spotset as shared_spotset


@dataclasses.dataclass
class GetSpotsetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    spot_set: Optional[shared_spotset.SpotSet] = dataclasses.field(default=None)
    
