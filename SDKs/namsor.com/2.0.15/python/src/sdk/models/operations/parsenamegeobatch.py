import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchpersonalnamegeoin as shared_batchpersonalnamegeoin
from ..shared import batchpersonalnameparsedout as shared_batchpersonalnameparsedout


@dataclasses.dataclass
class ParseNameGeoBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ParseNameGeoBatchRequest:
    security: ParseNameGeoBatchSecurity = dataclasses.field()
    request: Optional[shared_batchpersonalnamegeoin.BatchPersonalNameGeoIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ParseNameGeoBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_personal_name_parsed_out: Optional[shared_batchpersonalnameparsedout.BatchPersonalNameParsedOut] = dataclasses.field(default=None)
    
