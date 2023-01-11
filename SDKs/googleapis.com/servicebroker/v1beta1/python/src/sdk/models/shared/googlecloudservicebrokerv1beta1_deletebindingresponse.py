import dataclasses
from typing import Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1DeleteBindingResponse:
    r"""GoogleCloudServicebrokerV1beta1DeleteBindingResponse
    Response for the `DeleteBinding()` method.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    operation: Optional[str] = dataclasses.field(default=None)
    
