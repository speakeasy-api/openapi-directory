import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectioncreaterequest as shared_collectioncreaterequest
from ..shared import collectioncreateresponse as shared_collectioncreateresponse


@dataclasses.dataclass
class CreateImageCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateImageCollectionRequest:
    request: shared_collectioncreaterequest.CollectionCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateImageCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateImageCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_create_response: Optional[shared_collectioncreateresponse.CollectionCreateResponse] = dataclasses.field(default=None)
    
