import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchnamegeoin as shared_batchnamegeoin
from ..shared import batchpropernouncategorizedout as shared_batchpropernouncategorizedout


@dataclasses.dataclass
class NameTypeGeoBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class NameTypeGeoBatchRequest:
    security: NameTypeGeoBatchSecurity = dataclasses.field()
    request: Optional[shared_batchnamegeoin.BatchNameGeoIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NameTypeGeoBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_proper_noun_categorized_out: Optional[shared_batchpropernouncategorizedout.BatchProperNounCategorizedOut] = dataclasses.field(default=None)
    
