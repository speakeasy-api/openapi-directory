import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGenBankNucleotideMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenBankNucleotideMappingUsingGetRequest:
    path_params: GetGenBankNucleotideMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenBankNucleotideMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
