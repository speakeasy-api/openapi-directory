import dataclasses
from typing import Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse:
    r"""GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse
    Response for the `CreateServiceInstance()` method.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    operation: Optional[str] = dataclasses.field(default=None)
    
