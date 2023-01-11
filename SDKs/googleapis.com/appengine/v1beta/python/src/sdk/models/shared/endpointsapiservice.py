import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EndpointsAPIServiceRolloutStrategyEnum(str, Enum):
    UNSPECIFIED_ROLLOUT_STRATEGY = "UNSPECIFIED_ROLLOUT_STRATEGY"
    FIXED = "FIXED"
    MANAGED = "MANAGED"


@dataclass_json
@dataclasses.dataclass
class EndpointsAPIService:
    r"""EndpointsAPIService
    Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a \"service\" resource in the Service Management API (https://cloud.google.com/service-management/overview).
    """
    
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    disable_trace_sampling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTraceSampling') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rollout_strategy: Optional[EndpointsAPIServiceRolloutStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutStrategy') }})
    
