import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamephonenumberin as shared_batchfirstlastnamephonenumberin
from ..shared import batchfirstlastnamephonecodedout as shared_batchfirstlastnamephonecodedout


@dataclasses.dataclass
class PhoneCodeBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PhoneCodeBatchRequest:
    security: PhoneCodeBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamephonenumberin.BatchFirstLastNamePhoneNumberIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PhoneCodeBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_phone_coded_out: Optional[shared_batchfirstlastnamephonecodedout.BatchFirstLastNamePhoneCodedOut] = dataclasses.field(default=None)
    
