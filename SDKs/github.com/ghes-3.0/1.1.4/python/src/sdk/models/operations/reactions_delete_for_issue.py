import dataclasses



@dataclasses.dataclass
class ReactionsDeleteForIssuePathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsDeleteForIssueRequest:
    path_params: ReactionsDeleteForIssuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsDeleteForIssueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
