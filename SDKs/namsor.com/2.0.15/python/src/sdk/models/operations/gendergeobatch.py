import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamegeoin as shared_batchfirstlastnamegeoin
from ..shared import batchfirstlastnamegenderedout as shared_batchfirstlastnamegenderedout


@dataclasses.dataclass
class GenderGeoBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderGeoBatchRequest:
    security: GenderGeoBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamegeoin.BatchFirstLastNameGeoIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenderGeoBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_gendered_out: Optional[shared_batchfirstlastnamegenderedout.BatchFirstLastNameGenderedOut] = dataclasses.field(default=None)
    
