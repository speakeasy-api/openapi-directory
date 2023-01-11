import dataclasses



@dataclasses.dataclass
class ActivityDeleteRepoSubscriptionPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityDeleteRepoSubscriptionRequest:
    path_params: ActivityDeleteRepoSubscriptionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityDeleteRepoSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
