import dataclasses
from typing import Optional
from ..shared import listwebhookdeliverylogsresponse as shared_listwebhookdeliverylogsresponse


@dataclasses.dataclass
class GetWebhooksWebhookIDLogsPathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhooksWebhookIDLogsQueryParams:
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWebhooksWebhookIDLogsRequest:
    path_params: GetWebhooksWebhookIDLogsPathParams = dataclasses.field()
    query_params: GetWebhooksWebhookIDLogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksWebhookIDLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_webhook_delivery_logs_response: Optional[shared_listwebhookdeliverylogsresponse.ListWebhookDeliveryLogsResponse] = dataclasses.field(default=None)
    
