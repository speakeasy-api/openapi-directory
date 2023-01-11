import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filteredbiddetailrow as shared_filteredbiddetailrow

class ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum(str, Enum):
    DETAIL_TYPE_UNSPECIFIED = "DETAIL_TYPE_UNSPECIFIED"
    CREATIVE_ATTRIBUTE = "CREATIVE_ATTRIBUTE"
    VENDOR = "VENDOR"
    SENSITIVE_CATEGORY = "SENSITIVE_CATEGORY"
    PRODUCT_CATEGORY = "PRODUCT_CATEGORY"
    DISAPPROVAL_REASON = "DISAPPROVAL_REASON"
    POLICY_TOPIC = "POLICY_TOPIC"
    ATP_VENDOR = "ATP_VENDOR"
    VENDOR_DOMAIN = "VENDOR_DOMAIN"
    GVL_ID = "GVL_ID"


@dataclass_json
@dataclasses.dataclass
class ListCreativeStatusBreakdownByDetailResponse:
    r"""ListCreativeStatusBreakdownByDetailResponse
    Response message for listing all details associated with a given filtered bid reason.
    """
    
    detail_type: Optional[ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailType') }})
    filtered_bid_detail_rows: Optional[list[shared_filteredbiddetailrow.FilteredBidDetailRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredBidDetailRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
