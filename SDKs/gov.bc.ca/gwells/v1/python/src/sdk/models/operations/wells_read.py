import dataclasses
from typing import Optional
from ..shared import welldetail as shared_welldetail


@dataclasses.dataclass
class WellsReadPathParams:
    well_tag_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'well_tag_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WellsReadRequest:
    path_params: WellsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WellsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    well_detail: Optional[shared_welldetail.WellDetail] = dataclasses.field(default=None)
    
