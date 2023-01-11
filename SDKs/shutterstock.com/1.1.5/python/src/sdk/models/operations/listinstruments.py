import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import instrumentlist as shared_instrumentlist


@dataclasses.dataclass
class ListInstrumentsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListInstrumentsRequest:
    security: ListInstrumentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListInstrumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    instrument_list: Optional[shared_instrumentlist.InstrumentList] = dataclasses.field(default=None)
    
