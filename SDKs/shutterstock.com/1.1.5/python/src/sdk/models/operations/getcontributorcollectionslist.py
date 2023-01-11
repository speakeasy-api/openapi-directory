import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetContributorCollectionsListPathParams:
    contributor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contributor_id', 'style': 'simple', 'explode': False }})
    
class GetContributorCollectionsListSortEnum(str, Enum):
    NEWEST = "newest"
    LAST_UPDATED = "last_updated"
    ITEM_COUNT = "item_count"


@dataclasses.dataclass
class GetContributorCollectionsListQueryParams:
    sort: Optional[GetContributorCollectionsListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContributorCollectionsListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetContributorCollectionsListRequest:
    path_params: GetContributorCollectionsListPathParams = dataclasses.field()
    query_params: GetContributorCollectionsListQueryParams = dataclasses.field()
    security: GetContributorCollectionsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetContributorCollectionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_data_list: Optional[Any] = dataclasses.field(default=None)
    
