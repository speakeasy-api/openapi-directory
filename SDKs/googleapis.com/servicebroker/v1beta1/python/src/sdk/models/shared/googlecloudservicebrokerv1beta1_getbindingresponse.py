import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1GetBindingResponse:
    r"""GoogleCloudServicebrokerV1beta1GetBindingResponse
    Response for the `GetBinding()` method.
    """
    
    credentials: Optional[dict[str, Any]] = dataclasses.field(default=None)
    deployment_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    resource_name: Optional[str] = dataclasses.field(default=None)
    route_service_url: Optional[str] = dataclasses.field(default=None)
    syslog_drain_url: Optional[str] = dataclasses.field(default=None)
    volume_mounts: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
