import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import collectionupdaterequest as shared_collectionupdaterequest


@dataclasses.dataclass
class RenameImageCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RenameImageCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RenameImageCollectionRequest:
    path_params: RenameImageCollectionPathParams = dataclasses.field()
    request: shared_collectionupdaterequest.CollectionUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: RenameImageCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RenameImageCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
