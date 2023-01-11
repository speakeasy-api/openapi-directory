import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import redacttransaction as shared_redacttransaction
from ..shared import errorinvalidid as shared_errorinvalidid
from ..shared import errorthrottled as shared_errorthrottled
from ..shared import errorunauthorized as shared_errorunauthorized
from ..shared import errorprematureredaction as shared_errorprematureredaction
from ..shared import errorunprovisioned as shared_errorunprovisioned
from ..shared import errorinvalidjson as shared_errorinvalidjson
from ..shared import errorunsupportedproduct as shared_errorunsupportedproduct


@dataclasses.dataclass
class RedactMessageSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class RedactMessageRequest:
    request: shared_redacttransaction.RedactTransaction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: RedactMessageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RedactMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_invalid_id: Optional[shared_errorinvalidid.ErrorInvalidID] = dataclasses.field(default=None)
    error_throttled: Optional[shared_errorthrottled.ErrorThrottled] = dataclasses.field(default=None)
    error_unauthorized: Optional[shared_errorunauthorized.ErrorUnauthorized] = dataclasses.field(default=None)
    redact_message_403_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    redact_message_422_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
