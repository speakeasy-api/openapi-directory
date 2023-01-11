import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class CampaignsRemovePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CampaignsRemoveSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CampaignsRemove200ApplicationJSON:
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class CampaignsRemoveRequest:
    path_params: CampaignsRemovePathParams = dataclasses.field()
    security: CampaignsRemoveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CampaignsRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaigns_remove_200_application_json_object: Optional[CampaignsRemove200ApplicationJSON] = dataclasses.field(default=None)
    
