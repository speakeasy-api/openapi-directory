import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchfirstlastnamegeozippedin as shared_batchfirstlastnamegeozippedin
from ..shared import batchfirstlastnameusraceethnicityout as shared_batchfirstlastnameusraceethnicityout


@dataclasses.dataclass
class UsZipRaceEthnicityBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsZipRaceEthnicityBatchRequest:
    security: UsZipRaceEthnicityBatchSecurity = dataclasses.field()
    request: Optional[shared_batchfirstlastnamegeozippedin.BatchFirstLastNameGeoZippedIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UsZipRaceEthnicityBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_first_last_name_us_race_ethnicity_out: Optional[shared_batchfirstlastnameusraceethnicityout.BatchFirstLastNameUsRaceEthnicityOut] = dataclasses.field(default=None)
    
