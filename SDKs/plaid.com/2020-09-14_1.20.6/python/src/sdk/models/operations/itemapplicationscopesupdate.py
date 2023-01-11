import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import itemapplicationscopesupdaterequest as shared_itemapplicationscopesupdaterequest
from ..shared import itemapplicationscopesupdateresponse as shared_itemapplicationscopesupdateresponse


@dataclasses.dataclass
class ItemApplicationScopesUpdateRequest:
    request: shared_itemapplicationscopesupdaterequest.ItemApplicationScopesUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemApplicationScopesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    item_application_scopes_update_response: Optional[shared_itemapplicationscopesupdateresponse.ItemApplicationScopesUpdateResponse] = dataclasses.field(default=None)
    
