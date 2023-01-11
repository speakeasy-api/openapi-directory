import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ParentEntityFilterFileTypeEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    FILE_TYPE_CAMPAIGN = "FILE_TYPE_CAMPAIGN"
    FILE_TYPE_MEDIA_PRODUCT = "FILE_TYPE_MEDIA_PRODUCT"
    FILE_TYPE_INSERTION_ORDER = "FILE_TYPE_INSERTION_ORDER"
    FILE_TYPE_LINE_ITEM = "FILE_TYPE_LINE_ITEM"
    FILE_TYPE_AD_GROUP = "FILE_TYPE_AD_GROUP"
    FILE_TYPE_AD = "FILE_TYPE_AD"

class ParentEntityFilterFilterTypeEnum(str, Enum):
    FILTER_TYPE_UNSPECIFIED = "FILTER_TYPE_UNSPECIFIED"
    FILTER_TYPE_NONE = "FILTER_TYPE_NONE"
    FILTER_TYPE_ADVERTISER_ID = "FILTER_TYPE_ADVERTISER_ID"
    FILTER_TYPE_CAMPAIGN_ID = "FILTER_TYPE_CAMPAIGN_ID"
    FILTER_TYPE_MEDIA_PRODUCT_ID = "FILTER_TYPE_MEDIA_PRODUCT_ID"
    FILTER_TYPE_INSERTION_ORDER_ID = "FILTER_TYPE_INSERTION_ORDER_ID"
    FILTER_TYPE_LINE_ITEM_ID = "FILTER_TYPE_LINE_ITEM_ID"


@dataclass_json
@dataclasses.dataclass
class ParentEntityFilter:
    r"""ParentEntityFilter
    A filtering option that filters on selected file types belonging to a chosen set of filter entities.
    """
    
    file_type: Optional[list[ParentEntityFilterFileTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    filter_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterIds') }})
    filter_type: Optional[ParentEntityFilterFilterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterType') }})
    
