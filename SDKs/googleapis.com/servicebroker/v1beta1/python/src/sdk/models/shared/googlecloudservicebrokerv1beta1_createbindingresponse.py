import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1CreateBindingResponse:
    r"""GoogleCloudServicebrokerV1beta1CreateBindingResponse
    Response for the `CreateBinding()` method.
    """
    
    credentials: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    operation: Optional[str] = dataclasses.field(default=None)
    route_service_url: Optional[str] = dataclasses.field(default=None)
    syslog_drain_url: Optional[str] = dataclasses.field(default=None)
    volume_mounts: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
