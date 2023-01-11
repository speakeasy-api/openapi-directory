import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1Plan:
    r"""GoogleCloudServicebrokerV1beta1Plan
    Plan message describes a Service Plan.
    """
    
    bindable: Optional[bool] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    free: Optional[bool] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    schemas: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
