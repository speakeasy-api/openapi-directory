import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamein as shared_batchfirstlastnamein
from ..shared import batchfirstlastnamegenderedout as shared_batchfirstlastnamegenderedout


@dataclasses.dataclass
class GenderBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderBatchRequest:
    security: GenderBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamein.BatchFirstLastNameIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenderBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_gendered_out: Optional[shared_batchfirstlastnamegenderedout.BatchFirstLastNameGenderedOut] = dataclasses.field(default=None)
    
