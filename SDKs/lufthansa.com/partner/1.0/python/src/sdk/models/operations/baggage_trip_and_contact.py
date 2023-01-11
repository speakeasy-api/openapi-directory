import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class BaggageTripAndContactPathParams:
    search_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'searchID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BaggageTripAndContactHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BaggageTripAndContactSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BaggageTripAndContactRequest:
    headers: BaggageTripAndContactHeaders = dataclasses.field()
    path_params: BaggageTripAndContactPathParams = dataclasses.field()
    security: BaggageTripAndContactSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BaggageTripAndContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    baggage_trip_and_contact_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
