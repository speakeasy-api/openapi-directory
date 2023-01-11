import dataclasses
from typing import Any,Optional
from ..shared import webhooksresponse as shared_webhooksresponse


@dataclasses.dataclass
class ListWebhooksV1QueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListWebhooksV1Request:
    query_params: ListWebhooksV1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListWebhooksV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhooks_response: Optional[shared_webhooksresponse.WebhooksResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
