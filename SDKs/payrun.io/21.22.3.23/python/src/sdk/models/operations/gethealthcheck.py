import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import healthcheck as shared_healthcheck


@dataclasses.dataclass
class GetHealthCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    health_check: Optional[shared_healthcheck.HealthCheck] = dataclasses.field(default=None)
    
