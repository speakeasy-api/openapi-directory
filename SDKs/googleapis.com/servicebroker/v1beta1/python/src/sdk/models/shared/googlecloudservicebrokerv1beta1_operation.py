import dataclasses
from typing import Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1Operation:
    r"""GoogleCloudServicebrokerV1beta1Operation
    Describes a long running operation, which conforms to OpenService API.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    
