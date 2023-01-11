import dataclasses



@dataclasses.dataclass
class ReactionsDeleteForIssueCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsDeleteForIssueCommentRequest:
    path_params: ReactionsDeleteForIssueCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsDeleteForIssueCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
