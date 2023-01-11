import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import publicsubscriptionstatusesresponse as shared_publicsubscriptionstatusesresponse


@dataclasses.dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams:
    email_address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest:
    path_params: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams = dataclasses.field()
    security: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    public_subscription_statuses_response: Optional[shared_publicsubscriptionstatusesresponse.PublicSubscriptionStatusesResponse] = dataclasses.field(default=None)
    
