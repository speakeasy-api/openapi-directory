import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnamephonecodedout as shared_firstlastnamephonecodedout


@dataclasses.dataclass
class PhoneCodeGeoFeedbackLoopPathParams:
    country_iso2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    first_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneNumber', 'style': 'simple', 'explode': False }})
    phone_number_e164: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneNumberE164', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PhoneCodeGeoFeedbackLoopSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PhoneCodeGeoFeedbackLoopRequest:
    path_params: PhoneCodeGeoFeedbackLoopPathParams = dataclasses.field()
    security: PhoneCodeGeoFeedbackLoopSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PhoneCodeGeoFeedbackLoopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_phone_coded_out: Optional[shared_firstlastnamephonecodedout.FirstLastNamePhoneCodedOut] = dataclasses.field(default=None)
    
