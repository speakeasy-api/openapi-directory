import dataclasses
from typing import Optional
from ..shared import googlecloudservicebrokerv1beta1_serviceinstance as shared_googlecloudservicebrokerv1beta1_serviceinstance


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse:
    r"""GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse
    The response for the `ListServiceInstances()` method.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    instances: Optional[list[shared_googlecloudservicebrokerv1beta1_serviceinstance.GoogleCloudServicebrokerV1beta1ServiceInstance]] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
