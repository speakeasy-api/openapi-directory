import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1repricingadjustment as shared_googlecloudchannelv1repricingadjustment
from ..shared import googlecloudchannelv1conditionaloverride as shared_googlecloudchannelv1conditionaloverride
from ..shared import googletypedate as shared_googletypedate
from ..shared import googlecloudchannelv1repricingconfigentitlementgranularity as shared_googlecloudchannelv1repricingconfigentitlementgranularity

class GoogleCloudChannelV1RepricingConfigRebillingBasisEnum(str, Enum):
    REBILLING_BASIS_UNSPECIFIED = "REBILLING_BASIS_UNSPECIFIED"
    COST_AT_LIST = "COST_AT_LIST"
    DIRECT_CUSTOMER_COST = "DIRECT_CUSTOMER_COST"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RepricingConfig:
    r"""GoogleCloudChannelV1RepricingConfig
    Configuration for repricing a Google bill over a period of time.
    """
    
    adjustment: Optional[shared_googlecloudchannelv1repricingadjustment.GoogleCloudChannelV1RepricingAdjustment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    channel_partner_granularity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerGranularity') }})
    conditional_overrides: Optional[list[shared_googlecloudchannelv1conditionaloverride.GoogleCloudChannelV1ConditionalOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionalOverrides') }})
    effective_invoice_month: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveInvoiceMonth') }})
    entitlement_granularity: Optional[shared_googlecloudchannelv1repricingconfigentitlementgranularity.GoogleCloudChannelV1RepricingConfigEntitlementGranularity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlementGranularity') }})
    rebilling_basis: Optional[GoogleCloudChannelV1RepricingConfigRebillingBasisEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebillingBasis') }})
    
