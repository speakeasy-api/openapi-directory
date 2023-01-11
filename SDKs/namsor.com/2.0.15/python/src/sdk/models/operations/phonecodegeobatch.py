import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamephonenumbergeoin as shared_batchfirstlastnamephonenumbergeoin
from ..shared import batchfirstlastnamephonecodedout as shared_batchfirstlastnamephonecodedout


@dataclasses.dataclass
class PhoneCodeGeoBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PhoneCodeGeoBatchRequest:
    security: PhoneCodeGeoBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamephonenumbergeoin.BatchFirstLastNamePhoneNumberGeoIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PhoneCodeGeoBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_phone_coded_out: Optional[shared_batchfirstlastnamephonecodedout.BatchFirstLastNamePhoneCodedOut] = dataclasses.field(default=None)
    
