import dataclasses
from typing import Optional
from ..shared import findings as shared_findings


@dataclasses.dataclass
class GetFindingPagePathParams:
    scan_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFindingPageRequest:
    path_params: GetFindingPagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFindingPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    findings: Optional[list[shared_findings.Findings]] = dataclasses.field(default=None)
    
