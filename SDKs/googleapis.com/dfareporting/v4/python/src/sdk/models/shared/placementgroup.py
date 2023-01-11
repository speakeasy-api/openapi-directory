import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import lastmodifiedinfo as shared_lastmodifiedinfo
from ..shared import pricingschedule as shared_pricingschedule

class PlacementGroupActiveStatusEnum(str, Enum):
    PLACEMENT_STATUS_UNKNOWN = "PLACEMENT_STATUS_UNKNOWN"
    PLACEMENT_STATUS_ACTIVE = "PLACEMENT_STATUS_ACTIVE"
    PLACEMENT_STATUS_INACTIVE = "PLACEMENT_STATUS_INACTIVE"
    PLACEMENT_STATUS_ARCHIVED = "PLACEMENT_STATUS_ARCHIVED"
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"

class PlacementGroupPlacementGroupTypeEnum(str, Enum):
    PLACEMENT_PACKAGE = "PLACEMENT_PACKAGE"
    PLACEMENT_ROADBLOCK = "PLACEMENT_ROADBLOCK"


@dataclass_json
@dataclasses.dataclass
class PlacementGroup:
    r"""PlacementGroup
    Contains properties of a package or roadblock.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active_status: Optional[PlacementGroupActiveStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeStatus') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    campaign_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIdDimensionValue') }})
    child_placement_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPlacementIds') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    content_category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategoryId') }})
    create_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInfo') }})
    directory_site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteId') }})
    directory_site_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteIdDimensionValue') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    placement_group_type: Optional[PlacementGroupPlacementGroupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroupType') }})
    placement_strategy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategyId') }})
    pricing_schedule: Optional[shared_pricingschedule.PricingSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingSchedule') }})
    primary_placement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPlacementId') }})
    primary_placement_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPlacementIdDimensionValue') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteId') }})
    site_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteIdDimensionValue') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    
