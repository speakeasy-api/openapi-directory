import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import updatevideoeditorrequest as shared_updatevideoeditorrequest


@dataclasses.dataclass
class UpdateEditorInstanceSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateEditorInstanceRequest:
    security: UpdateEditorInstanceSecurity = dataclasses.field()
    request: Optional[shared_updatevideoeditorrequest.UpdateVideoEditorRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEditorInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
