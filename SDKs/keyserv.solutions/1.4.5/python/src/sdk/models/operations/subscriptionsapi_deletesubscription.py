import dataclasses



@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscriptionPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscriptionQueryParams:
    keep: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'keep', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscriptionHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscriptionRequest:
    headers: SubscriptionsAPIDeleteSubscriptionHeaders = dataclasses.field()
    path_params: SubscriptionsAPIDeleteSubscriptionPathParams = dataclasses.field()
    query_params: SubscriptionsAPIDeleteSubscriptionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
