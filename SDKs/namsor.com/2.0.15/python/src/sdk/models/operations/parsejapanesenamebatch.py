import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchpersonalnamein as shared_batchpersonalnamein
from ..shared import batchpersonalnameparsedout as shared_batchpersonalnameparsedout


@dataclasses.dataclass
class ParseJapaneseNameBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ParseJapaneseNameBatchRequest:
    security: ParseJapaneseNameBatchSecurity = dataclasses.field()
    request: Optional[shared_batchpersonalnamein.BatchPersonalNameIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ParseJapaneseNameBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_personal_name_parsed_out: Optional[shared_batchpersonalnameparsedout.BatchPersonalNameParsedOut] = dataclasses.field(default=None)
    
