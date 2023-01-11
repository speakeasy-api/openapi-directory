import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import biddingstrategy as shared_biddingstrategy
from ..shared import insertionorderbudget as shared_insertionorderbudget
from ..shared import frequencycap as shared_frequencycap
from ..shared import integrationdetails as shared_integrationdetails
from ..shared import pacing as shared_pacing
from ..shared import partnercost as shared_partnercost
from ..shared import performancegoal as shared_performancegoal

class InsertionOrderBillableOutcomeEnum(str, Enum):
    BILLABLE_OUTCOME_UNSPECIFIED = "BILLABLE_OUTCOME_UNSPECIFIED"
    BILLABLE_OUTCOME_PAY_PER_IMPRESSION = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION"
    BILLABLE_OUTCOME_PAY_PER_CLICK = "BILLABLE_OUTCOME_PAY_PER_CLICK"
    BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"

class InsertionOrderEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class InsertionOrderInsertionOrderTypeEnum(str, Enum):
    INSERTION_ORDER_TYPE_UNSPECIFIED = "INSERTION_ORDER_TYPE_UNSPECIFIED"
    RTB = "RTB"
    OVER_THE_TOP = "OVER_THE_TOP"

class InsertionOrderReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    RESERVATION_TYPE_NOT_GUARANTEED = "RESERVATION_TYPE_NOT_GUARANTEED"
    RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
    RESERVATION_TYPE_TAG_GUARANTEED = "RESERVATION_TYPE_TAG_GUARANTEED"


@dataclass_json
@dataclasses.dataclass
class InsertionOrder:
    r"""InsertionOrder
    A single insertion order.
    """
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    bid_strategy: Optional[shared_biddingstrategy.BiddingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidStrategy') }})
    billable_outcome: Optional[InsertionOrderBillableOutcomeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billableOutcome') }})
    budget: Optional[shared_insertionorderbudget.InsertionOrderBudget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[InsertionOrderEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    frequency_cap: Optional[shared_frequencycap.FrequencyCap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    insertion_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrderId') }})
    insertion_order_type: Optional[InsertionOrderInsertionOrderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrderType') }})
    integration_details: Optional[shared_integrationdetails.IntegrationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pacing: Optional[shared_pacing.Pacing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacing') }})
    partner_costs: Optional[list[shared_partnercost.PartnerCost]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerCosts') }})
    performance_goal: Optional[shared_performancegoal.PerformanceGoal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoal') }})
    reservation_type: Optional[InsertionOrderReservationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationType') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class InsertionOrderInput:
    r"""InsertionOrderInput
    A single insertion order.
    """
    
    bid_strategy: Optional[shared_biddingstrategy.BiddingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidStrategy') }})
    billable_outcome: Optional[InsertionOrderBillableOutcomeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billableOutcome') }})
    budget: Optional[shared_insertionorderbudget.InsertionOrderBudget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[InsertionOrderEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    frequency_cap: Optional[shared_frequencycap.FrequencyCap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    insertion_order_type: Optional[InsertionOrderInsertionOrderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrderType') }})
    integration_details: Optional[shared_integrationdetails.IntegrationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    pacing: Optional[shared_pacing.Pacing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacing') }})
    partner_costs: Optional[list[shared_partnercost.PartnerCost]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerCosts') }})
    performance_goal: Optional[shared_performancegoal.PerformanceGoal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoal') }})
    
