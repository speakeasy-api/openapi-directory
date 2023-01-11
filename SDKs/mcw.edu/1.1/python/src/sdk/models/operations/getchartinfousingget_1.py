import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChartInfoUsingGet1PathParams:
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    term_string: str = dataclasses.field(metadata={'path_param': { 'field_name': 'termString', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChartInfoUsingGet1Request:
    path_params: GetChartInfoUsingGet1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChartInfoUsingGet1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
