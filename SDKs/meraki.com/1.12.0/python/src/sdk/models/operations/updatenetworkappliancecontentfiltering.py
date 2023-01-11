import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceContentFilteringPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum(str, Enum):
    TOP_SITES = "topSites"
    FULL_LIST = "fullList"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceContentFilteringRequestBody:
    allowed_url_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedUrlPatterns') }})
    blocked_url_categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlCategories') }})
    blocked_url_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlPatterns') }})
    url_category_list_size: Optional[UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlCategoryListSize') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceContentFilteringRequest:
    path_params: UpdateNetworkApplianceContentFilteringPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceContentFilteringRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceContentFilteringResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_content_filtering_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
