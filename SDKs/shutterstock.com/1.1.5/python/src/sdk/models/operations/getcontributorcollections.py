import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import collection as shared_collection


@dataclasses.dataclass
class GetContributorCollectionsPathParams:
    contributor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contributor_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContributorCollectionsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetContributorCollectionsRequest:
    path_params: GetContributorCollectionsPathParams = dataclasses.field()
    security: GetContributorCollectionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetContributorCollectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    
