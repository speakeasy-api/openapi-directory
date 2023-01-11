import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
