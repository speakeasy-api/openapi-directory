import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamein as shared_batchfirstlastnamein
from ..shared import batchnamematchcandidatesout as shared_batchnamematchcandidatesout


@dataclasses.dataclass
class ChineseNameCandidatesBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ChineseNameCandidatesBatchRequest:
    security: ChineseNameCandidatesBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamein.BatchFirstLastNameIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChineseNameCandidatesBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_name_match_candidates_out: Optional[shared_batchnamematchcandidatesout.BatchNameMatchCandidatesOut] = dataclasses.field(default=None)
    
