import dataclasses



@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgRequest:
    path_params: ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
