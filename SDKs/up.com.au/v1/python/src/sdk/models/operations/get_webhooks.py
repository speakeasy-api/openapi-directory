import dataclasses
from typing import Optional
from ..shared import listwebhooksresponse as shared_listwebhooksresponse


@dataclasses.dataclass
class GetWebhooksQueryParams:
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWebhooksRequest:
    query_params: GetWebhooksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_webhooks_response: Optional[shared_listwebhooksresponse.ListWebhooksResponse] = dataclasses.field(default=None)
    
