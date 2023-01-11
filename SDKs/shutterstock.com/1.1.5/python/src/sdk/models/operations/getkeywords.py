import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetKeywordsQueryParams:
    asset_id: Any = dataclasses.field(metadata={'query_param': { 'field_name': 'asset_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetKeywordsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetKeywordsRequest:
    query_params: GetKeywordsQueryParams = dataclasses.field()
    security: GetKeywordsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetKeywordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keyword_data_list: Optional[Any] = dataclasses.field(default=None)
    
