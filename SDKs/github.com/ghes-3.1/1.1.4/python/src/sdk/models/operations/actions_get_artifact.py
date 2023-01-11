import dataclasses
from typing import Optional
from ..shared import artifact as shared_artifact


@dataclasses.dataclass
class ActionsGetArtifactPathParams:
    artifact_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetArtifactRequest:
    path_params: ActionsGetArtifactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact: Optional[shared_artifact.Artifact] = dataclasses.field(default=None)
    
