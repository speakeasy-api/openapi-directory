import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchmatchpersonalfirstlastnamein as shared_batchmatchpersonalfirstlastnamein
from ..shared import batchnamematchedout as shared_batchnamematchedout


@dataclasses.dataclass
class ChineseNameMatchBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ChineseNameMatchBatchRequest:
    security: ChineseNameMatchBatchSecurity = dataclasses.field()
    request: Optional[shared_batchmatchpersonalfirstlastnamein.BatchMatchPersonalFirstLastNameIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChineseNameMatchBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_name_matched_out: Optional[shared_batchnamematchedout.BatchNameMatchedOut] = dataclasses.field(default=None)
    
