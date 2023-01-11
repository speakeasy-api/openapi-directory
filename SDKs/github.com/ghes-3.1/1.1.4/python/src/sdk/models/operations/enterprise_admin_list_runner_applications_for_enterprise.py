import dataclasses
from typing import Optional
from ..shared import runner_application as shared_runner_application


@dataclasses.dataclass
class EnterpriseAdminListRunnerApplicationsForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListRunnerApplicationsForEnterpriseRequest:
    path_params: EnterpriseAdminListRunnerApplicationsForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListRunnerApplicationsForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_applications: Optional[list[shared_runner_application.RunnerApplication]] = dataclasses.field(default=None)
    
