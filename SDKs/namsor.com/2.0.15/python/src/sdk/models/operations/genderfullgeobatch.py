import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchpersonalnamegeoin as shared_batchpersonalnamegeoin
from ..shared import batchpersonalnamegenderedout as shared_batchpersonalnamegenderedout


@dataclasses.dataclass
class GenderFullGeoBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderFullGeoBatchRequest:
    security: GenderFullGeoBatchSecurity = dataclasses.field()
    request: Optional[shared_batchpersonalnamegeoin.BatchPersonalNameGeoIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenderFullGeoBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_personal_name_gendered_out: Optional[shared_batchpersonalnamegenderedout.BatchPersonalNameGenderedOut] = dataclasses.field(default=None)
    
