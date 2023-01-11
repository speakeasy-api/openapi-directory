import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamein as shared_batchfirstlastnamein
from ..shared import batchfirstlastnameoriginedout as shared_batchfirstlastnameoriginedout


@dataclasses.dataclass
class OriginBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class OriginBatchRequest:
    security: OriginBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamein.BatchFirstLastNameIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OriginBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_origined_out: Optional[shared_batchfirstlastnameoriginedout.BatchFirstLastNameOriginedOut] = dataclasses.field(default=None)
    
