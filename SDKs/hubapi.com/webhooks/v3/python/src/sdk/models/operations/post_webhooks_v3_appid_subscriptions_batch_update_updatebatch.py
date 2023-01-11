import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchinputsubscriptionbatchupdaterequest as shared_batchinputsubscriptionbatchupdaterequest
from ..shared import batchresponsesubscriptionresponse as shared_batchresponsesubscriptionresponse
from ..shared import batchresponsesubscriptionresponsewitherrors as shared_batchresponsesubscriptionresponsewitherrors


@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchRequest:
    path_params: PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams = dataclasses.field()
    request: shared_batchinputsubscriptionbatchupdaterequest.BatchInputSubscriptionBatchUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_response_subscription_response: Optional[shared_batchresponsesubscriptionresponse.BatchResponseSubscriptionResponse] = dataclasses.field(default=None)
    batch_response_subscription_response_with_errors: Optional[shared_batchresponsesubscriptionresponsewitherrors.BatchResponseSubscriptionResponseWithErrors] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
