import dataclasses



@dataclasses.dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest:
    path_params: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
