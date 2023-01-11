import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGenBankProteinMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenBankProteinMappingUsingGetRequest:
    path_params: GetGenBankProteinMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenBankProteinMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
