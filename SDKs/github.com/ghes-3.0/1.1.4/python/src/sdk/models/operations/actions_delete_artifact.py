import dataclasses



@dataclasses.dataclass
class ActionsDeleteArtifactPathParams:
    artifact_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteArtifactRequest:
    path_params: ActionsDeleteArtifactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
