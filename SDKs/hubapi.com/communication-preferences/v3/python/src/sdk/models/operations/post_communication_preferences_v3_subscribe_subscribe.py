import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import publicupdatesubscriptionstatusrequest as shared_publicupdatesubscriptionstatusrequest
from ..shared import publicsubscriptionstatus as shared_publicsubscriptionstatus


@dataclasses.dataclass
class PostCommunicationPreferencesV3SubscribeSubscribeSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostCommunicationPreferencesV3SubscribeSubscribeRequest:
    request: shared_publicupdatesubscriptionstatusrequest.PublicUpdateSubscriptionStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostCommunicationPreferencesV3SubscribeSubscribeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostCommunicationPreferencesV3SubscribeSubscribeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    public_subscription_status: Optional[shared_publicsubscriptionstatus.PublicSubscriptionStatus] = dataclasses.field(default=None)
    
