import dataclasses
from typing import Optional
from ..shared import citylist as shared_citylist


@dataclasses.dataclass
class CitiesDrillersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    city_lists: Optional[list[shared_citylist.CityList]] = dataclasses.field(default=None)
    
