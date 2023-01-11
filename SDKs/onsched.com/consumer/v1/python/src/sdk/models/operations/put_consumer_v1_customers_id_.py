import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import customerupdatemodel as shared_customerupdatemodel


@dataclasses.dataclass
class PutConsumerV1CustomersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1CustomersIDRequests:
    customer_update_model: Optional[shared_customerupdatemodel.CustomerUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_update_model1: Optional[shared_customerupdatemodel.CustomerUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_update_model2: Optional[shared_customerupdatemodel.CustomerUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_update_model3: Optional[shared_customerupdatemodel.CustomerUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutConsumerV1CustomersIDRequest:
    path_params: PutConsumerV1CustomersIDPathParams = dataclasses.field()
    request: Optional[PutConsumerV1CustomersIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutConsumerV1CustomersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
