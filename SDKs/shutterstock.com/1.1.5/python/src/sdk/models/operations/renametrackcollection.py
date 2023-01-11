import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import collectionupdaterequest as shared_collectionupdaterequest


@dataclasses.dataclass
class RenameTrackCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RenameTrackCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RenameTrackCollectionRequest:
    path_params: RenameTrackCollectionPathParams = dataclasses.field()
    request: shared_collectionupdaterequest.CollectionUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: RenameTrackCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RenameTrackCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
