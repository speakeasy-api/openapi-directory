import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChartInfoUsingGetPathParams:
    ref_rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'refRgdId', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    term_string: str = dataclasses.field(metadata={'path_param': { 'field_name': 'termString', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChartInfoUsingGetRequest:
    path_params: GetChartInfoUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChartInfoUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
