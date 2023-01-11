import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ReposGetCodeFrequencyStatsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetCodeFrequencyStatsRequest:
    path_params: ReposGetCodeFrequencyStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetCodeFrequencyStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    code_frequency_stats: Optional[list[list[int]]] = dataclasses.field(default=None)
    repos_get_code_frequency_stats_202_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
