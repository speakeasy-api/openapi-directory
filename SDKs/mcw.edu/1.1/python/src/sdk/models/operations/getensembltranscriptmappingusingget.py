import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEnsemblTranscriptMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnsemblTranscriptMappingUsingGetRequest:
    path_params: GetEnsemblTranscriptMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnsemblTranscriptMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
