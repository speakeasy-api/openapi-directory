import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetWebhookInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_instance: Optional[Any] = dataclasses.field(default=None)
    
