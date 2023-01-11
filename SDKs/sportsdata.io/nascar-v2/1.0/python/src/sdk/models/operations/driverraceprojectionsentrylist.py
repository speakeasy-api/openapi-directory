import dataclasses
from typing import Any,Optional
from enum import Enum

class DriverRaceProjectionsEntryListFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class DriverRaceProjectionsEntryListPathParams:
    format: DriverRaceProjectionsEntryListFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    raceid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'raceid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DriverRaceProjectionsEntryListRequest:
    path_params: DriverRaceProjectionsEntryListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DriverRaceProjectionsEntryListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    driver_race_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
