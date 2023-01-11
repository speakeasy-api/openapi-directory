import dataclasses
from typing import Optional
from ..shared import googlecloudservicebrokerv1beta1_binding as shared_googlecloudservicebrokerv1beta1_binding


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1ListBindingsResponse:
    r"""GoogleCloudServicebrokerV1beta1ListBindingsResponse
    The response for the `ListBindings()` method.
    """
    
    bindings: Optional[list[shared_googlecloudservicebrokerv1beta1_binding.GoogleCloudServicebrokerV1beta1Binding]] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
