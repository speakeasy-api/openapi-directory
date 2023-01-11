import dataclasses
from typing import Optional
from ..shared import webhook_config as shared_webhook_config


@dataclasses.dataclass
class ReposGetWebhookConfigForRepoPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetWebhookConfigForRepoRequest:
    path_params: ReposGetWebhookConfigForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetWebhookConfigForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_config: Optional[shared_webhook_config.WebhookConfig] = dataclasses.field(default=None)
    
