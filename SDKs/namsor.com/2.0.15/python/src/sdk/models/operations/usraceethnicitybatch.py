import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamegeoin as shared_batchfirstlastnamegeoin
from ..shared import batchfirstlastnameusraceethnicityout as shared_batchfirstlastnameusraceethnicityout


@dataclasses.dataclass
class UsRaceEthnicityBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsRaceEthnicityBatchRequest:
    security: UsRaceEthnicityBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamegeoin.BatchFirstLastNameGeoIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UsRaceEthnicityBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_us_race_ethnicity_out: Optional[shared_batchfirstlastnameusraceethnicityout.BatchFirstLastNameUsRaceEthnicityOut] = dataclasses.field(default=None)
    
