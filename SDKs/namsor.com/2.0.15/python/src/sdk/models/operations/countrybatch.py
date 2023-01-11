import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchpersonalnamein as shared_batchpersonalnamein
from ..shared import batchpersonalnamegeoout as shared_batchpersonalnamegeoout


@dataclasses.dataclass
class CountryBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CountryBatchRequest:
    security: CountryBatchSecurity = dataclasses.field()
    request: Optional[shared_batchpersonalnamein.BatchPersonalNameIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CountryBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_personal_name_geo_out: Optional[shared_batchpersonalnamegeoout.BatchPersonalNameGeoOut] = dataclasses.field(default=None)
    
