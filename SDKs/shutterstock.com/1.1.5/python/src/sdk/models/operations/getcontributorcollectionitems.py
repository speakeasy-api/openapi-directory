import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetContributorCollectionItemsPathParams:
    contributor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contributor_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetContributorCollectionItemsSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class GetContributorCollectionItemsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetContributorCollectionItemsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContributorCollectionItemsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetContributorCollectionItemsRequest:
    path_params: GetContributorCollectionItemsPathParams = dataclasses.field()
    query_params: GetContributorCollectionItemsQueryParams = dataclasses.field()
    security: GetContributorCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetContributorCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_item_data_list: Optional[Any] = dataclasses.field(default=None)
    
