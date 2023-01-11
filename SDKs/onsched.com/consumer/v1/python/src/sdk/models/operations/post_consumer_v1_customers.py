import dataclasses
from typing import Optional
from ..shared import customerinputmodel as shared_customerinputmodel
from ..shared import customerviewmodel as shared_customerviewmodel


@dataclasses.dataclass
class PostConsumerV1CustomersRequests:
    customer_input_model: Optional[shared_customerinputmodel.CustomerInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_input_model1: Optional[shared_customerinputmodel.CustomerInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_input_model2: Optional[shared_customerinputmodel.CustomerInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_input_model3: Optional[shared_customerinputmodel.CustomerInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostConsumerV1CustomersRequest:
    request: Optional[PostConsumerV1CustomersRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostConsumerV1CustomersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_view_model: Optional[shared_customerviewmodel.CustomerViewModel] = dataclasses.field(default=None)
    
