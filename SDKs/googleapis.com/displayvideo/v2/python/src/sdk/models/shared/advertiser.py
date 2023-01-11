import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advertiseradserverconfig as shared_advertiseradserverconfig
from ..shared import advertiserbillingconfig as shared_advertiserbillingconfig
from ..shared import advertisercreativeconfig as shared_advertisercreativeconfig
from ..shared import advertiserdataaccessconfig as shared_advertiserdataaccessconfig
from ..shared import advertisergeneralconfig as shared_advertisergeneralconfig
from ..shared import integrationdetails as shared_integrationdetails
from ..shared import advertisertargetingconfig as shared_advertisertargetingconfig
from ..shared import advertisergeneralconfig as shared_advertisergeneralconfig

class AdvertiserEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclasses.dataclass
class Advertiser:
    r"""Advertiser
    A single advertiser in Display & Video 360 (DV360).
    """
    
    ad_server_config: Optional[shared_advertiseradserverconfig.AdvertiserAdServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adServerConfig') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    billing_config: Optional[shared_advertiserbillingconfig.AdvertiserBillingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingConfig') }})
    creative_config: Optional[shared_advertisercreativeconfig.AdvertiserCreativeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeConfig') }})
    data_access_config: Optional[shared_advertiserdataaccessconfig.AdvertiserDataAccessConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccessConfig') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[AdvertiserEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    general_config: Optional[shared_advertisergeneralconfig.AdvertiserGeneralConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalConfig') }})
    integration_details: Optional[shared_integrationdetails.IntegrationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    prisma_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaEnabled') }})
    serving_config: Optional[shared_advertisertargetingconfig.AdvertiserTargetingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfig') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvertiserInput:
    r"""AdvertiserInput
    A single advertiser in Display & Video 360 (DV360).
    """
    
    ad_server_config: Optional[shared_advertiseradserverconfig.AdvertiserAdServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adServerConfig') }})
    billing_config: Optional[shared_advertiserbillingconfig.AdvertiserBillingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingConfig') }})
    creative_config: Optional[shared_advertisercreativeconfig.AdvertiserCreativeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeConfig') }})
    data_access_config: Optional[shared_advertiserdataaccessconfig.AdvertiserDataAccessConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccessConfig') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[AdvertiserEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    general_config: Optional[shared_advertisergeneralconfig.AdvertiserGeneralConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalConfig') }})
    integration_details: Optional[shared_integrationdetails.IntegrationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    prisma_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaEnabled') }})
    serving_config: Optional[shared_advertisertargetingconfig.AdvertiserTargetingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfig') }})
    
