import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import getclicksmodel as shared_getclicksmodel


@dataclasses.dataclass
class GetClicksQueryParams:
    continue_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'continueFrom', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetClicksSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetClicksRequest:
    query_params: GetClicksQueryParams = dataclasses.field()
    security: GetClicksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetClicksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_clicks_model: Optional[shared_getclicksmodel.GetClicksModel] = dataclasses.field(default=None)
    
