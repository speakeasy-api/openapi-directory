import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_replace_items as shared_numbers_v2_regulatory_compliance_bundle_replace_items


CREATE_REPLACE_ITEMS_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class CreateReplaceItemsPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateReplaceItemsCreateReplaceItemsRequest:
    from_bundle_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'FromBundleSid' }})
    

@dataclasses.dataclass
class CreateReplaceItemsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateReplaceItemsRequest:
    path_params: CreateReplaceItemsPathParams = dataclasses.field()
    security: CreateReplaceItemsSecurity = dataclasses.field()
    request: Optional[CreateReplaceItemsCreateReplaceItemsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateReplaceItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle_replace_items: Optional[shared_numbers_v2_regulatory_compliance_bundle_replace_items.NumbersV2RegulatoryComplianceBundleReplaceItems] = dataclasses.field(default=None)
    
