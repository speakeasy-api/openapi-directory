import dataclasses
from typing import Optional
from ..shared import accessibilityrequest as shared_accessibilityrequest
from ..shared import getcurrentvalues as shared_getcurrentvalues


@dataclasses.dataclass
class AccessibilityRequest:
    request: shared_accessibilityrequest.AccessibilityRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccessibilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getcurrentvalues: Optional[shared_getcurrentvalues.Getcurrentvalues] = dataclasses.field(default=None)
    
