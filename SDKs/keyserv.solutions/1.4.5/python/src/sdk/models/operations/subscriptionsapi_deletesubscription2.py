import dataclasses



@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscription2PathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscription2QueryParams:
    keep: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'keep', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscription2Headers:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscription2Request:
    headers: SubscriptionsAPIDeleteSubscription2Headers = dataclasses.field()
    path_params: SubscriptionsAPIDeleteSubscription2PathParams = dataclasses.field()
    query_params: SubscriptionsAPIDeleteSubscription2QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SubscriptionsAPIDeleteSubscription2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
