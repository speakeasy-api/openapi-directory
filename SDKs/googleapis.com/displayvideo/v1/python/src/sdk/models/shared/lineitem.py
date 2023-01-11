import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import biddingstrategy as shared_biddingstrategy
from ..shared import lineitembudget as shared_lineitembudget
from ..shared import conversioncountingconfig as shared_conversioncountingconfig
from ..shared import lineitemflight as shared_lineitemflight
from ..shared import frequencycap as shared_frequencycap
from ..shared import integrationdetails as shared_integrationdetails
from ..shared import mobileapp as shared_mobileapp
from ..shared import pacing as shared_pacing
from ..shared import partnercost as shared_partnercost
from ..shared import partnerrevenuemodel as shared_partnerrevenuemodel
from ..shared import targetingexpansionconfig as shared_targetingexpansionconfig
from ..shared import lineitembudget as shared_lineitembudget
from ..shared import mobileapp as shared_mobileapp

class LineItemEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class LineItemLineItemTypeEnum(str, Enum):
    LINE_ITEM_TYPE_UNSPECIFIED = "LINE_ITEM_TYPE_UNSPECIFIED"
    LINE_ITEM_TYPE_DISPLAY_DEFAULT = "LINE_ITEM_TYPE_DISPLAY_DEFAULT"
    LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL"
    LINE_ITEM_TYPE_VIDEO_DEFAULT = "LINE_ITEM_TYPE_VIDEO_DEFAULT"
    LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL"
    LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY"
    LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY"
    LINE_ITEM_TYPE_AUDIO_DEFAULT = "LINE_ITEM_TYPE_AUDIO_DEFAULT"
    LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"

class LineItemReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    RESERVATION_TYPE_NOT_GUARANTEED = "RESERVATION_TYPE_NOT_GUARANTEED"
    RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
    RESERVATION_TYPE_TAG_GUARANTEED = "RESERVATION_TYPE_TAG_GUARANTEED"

class LineItemWarningMessagesEnum(str, Enum):
    LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED = "LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED"
    INVALID_FLIGHT_DATES = "INVALID_FLIGHT_DATES"
    EXPIRED = "EXPIRED"
    PENDING_FLIGHT = "PENDING_FLIGHT"
    ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED = "ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED"
    INVALID_INVENTORY_SOURCE = "INVALID_INVENTORY_SOURCE"
    APP_INVENTORY_INVALID_SITE_TARGETING = "APP_INVENTORY_INVALID_SITE_TARGETING"
    APP_INVENTORY_INVALID_AUDIENCE_LISTS = "APP_INVENTORY_INVALID_AUDIENCE_LISTS"
    NO_VALID_CREATIVE = "NO_VALID_CREATIVE"
    PARENT_INSERTION_ORDER_PAUSED = "PARENT_INSERTION_ORDER_PAUSED"
    PARENT_INSERTION_ORDER_EXPIRED = "PARENT_INSERTION_ORDER_EXPIRED"
    NO_POSITIVE_AUDIENCE_LIST_TARGETED = "NO_POSITIVE_AUDIENCE_LIST_TARGETED"
    APP_INSTALL_NO_CONVERSION_PIXEL = "APP_INSTALL_NO_CONVERSION_PIXEL"
    TARGETING_REVOKED_OR_CLOSED_USER_LIST = "TARGETING_REVOKED_OR_CLOSED_USER_LIST"
    APP_INSTALL_NO_OPTIMAL_BIDDING_STRATEGY = "APP_INSTALL_NO_OPTIMAL_BIDDING_STRATEGY"
    CREATIVE_SIZE_NOT_IN_USE_FOR_TARGETED_DEALS = "CREATIVE_SIZE_NOT_IN_USE_FOR_TARGETED_DEALS"
    NO_CREATIVE_FOR_TARGETED_DEALS = "NO_CREATIVE_FOR_TARGETED_DEALS"
    TARGETING_DEPRECATED_GEO_TARGET = "TARGETING_DEPRECATED_GEO_TARGET"


@dataclass_json
@dataclasses.dataclass
class LineItem:
    r"""LineItem
    A single line item.
    """
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    bid_strategy: Optional[shared_biddingstrategy.BiddingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidStrategy') }})
    budget: Optional[shared_lineitembudget.LineItemBudget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    conversion_counting: Optional[shared_conversioncountingconfig.ConversionCountingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionCounting') }})
    creative_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeIds') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[LineItemEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exclude_new_exchanges: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeNewExchanges') }})
    flight: Optional[shared_lineitemflight.LineItemFlight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flight') }})
    frequency_cap: Optional[shared_frequencycap.FrequencyCap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    insertion_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrderId') }})
    integration_details: Optional[shared_integrationdetails.IntegrationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    inventory_source_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceIds') }})
    line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    line_item_type: Optional[LineItemLineItemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemType') }})
    mobile_app: Optional[shared_mobileapp.MobileApp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApp') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pacing: Optional[shared_pacing.Pacing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacing') }})
    partner_costs: Optional[list[shared_partnercost.PartnerCost]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerCosts') }})
    partner_revenue_model: Optional[shared_partnerrevenuemodel.PartnerRevenueModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerRevenueModel') }})
    reservation_type: Optional[LineItemReservationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationType') }})
    targeting_expansion: Optional[shared_targetingexpansionconfig.TargetingExpansionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingExpansion') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    warning_messages: Optional[list[LineItemWarningMessagesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningMessages') }})
    

@dataclass_json
@dataclasses.dataclass
class LineItemInput:
    r"""LineItemInput
    A single line item.
    """
    
    bid_strategy: Optional[shared_biddingstrategy.BiddingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidStrategy') }})
    budget: Optional[shared_lineitembudget.LineItemBudgetInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    conversion_counting: Optional[shared_conversioncountingconfig.ConversionCountingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionCounting') }})
    creative_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeIds') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[LineItemEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exclude_new_exchanges: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeNewExchanges') }})
    flight: Optional[shared_lineitemflight.LineItemFlight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flight') }})
    frequency_cap: Optional[shared_frequencycap.FrequencyCap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    insertion_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrderId') }})
    integration_details: Optional[shared_integrationdetails.IntegrationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    inventory_source_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceIds') }})
    line_item_type: Optional[LineItemLineItemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemType') }})
    mobile_app: Optional[shared_mobileapp.MobileAppInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApp') }})
    pacing: Optional[shared_pacing.Pacing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacing') }})
    partner_costs: Optional[list[shared_partnercost.PartnerCost]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerCosts') }})
    partner_revenue_model: Optional[shared_partnerrevenuemodel.PartnerRevenueModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerRevenueModel') }})
    targeting_expansion: Optional[shared_targetingexpansionconfig.TargetingExpansionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingExpansion') }})
    
