import dataclasses



@dataclasses.dataclass
class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest:
    path_params: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
