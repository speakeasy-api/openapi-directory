import dataclasses
from typing import Optional
from ..shared import webhook_config as shared_webhook_config


@dataclasses.dataclass
class AppsGetWebhookConfigForAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_config: Optional[shared_webhook_config.WebhookConfig] = dataclasses.field(default=None)
    
