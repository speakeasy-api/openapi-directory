import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import repository_subscription as shared_repository_subscription


@dataclasses.dataclass
class ActivityGetRepoSubscriptionPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityGetRepoSubscriptionRequest:
    path_params: ActivityGetRepoSubscriptionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityGetRepoSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repository_subscription: Optional[shared_repository_subscription.RepositorySubscription] = dataclasses.field(default=None)
    
