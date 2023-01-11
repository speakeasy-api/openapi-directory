import dataclasses



@dataclasses.dataclass
class ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest:
    path_params: ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
