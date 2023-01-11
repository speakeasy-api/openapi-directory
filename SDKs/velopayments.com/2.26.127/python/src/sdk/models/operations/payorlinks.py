import dataclasses
from typing import Any,Optional
from ..shared import payorlinksresponse as shared_payorlinksresponse


@dataclasses.dataclass
class PayorLinksQueryParams:
    descendants_of_payor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'descendantsOfPayor', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    parent_of_payor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parentOfPayor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PayorLinksRequest:
    query_params: PayorLinksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PayorLinksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payor_links_response: Optional[shared_payorlinksresponse.PayorLinksResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
