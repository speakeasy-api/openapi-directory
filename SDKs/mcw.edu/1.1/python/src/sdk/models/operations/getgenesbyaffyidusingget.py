import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGenesByAffyIDUsingGetPathParams:
    affy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'affyId', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenesByAffyIDUsingGetRequest:
    path_params: GetGenesByAffyIDUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenesByAffyIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
