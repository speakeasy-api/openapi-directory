import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactinfolist as shared_contactinfolist
from ..shared import mobiledeviceidlist as shared_mobiledeviceidlist


@dataclass_json
@dataclasses.dataclass
class EditCustomerMatchMembersRequest:
    r"""EditCustomerMatchMembersRequest
    Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
    """
    
    added_contact_info_list: Optional[shared_contactinfolist.ContactInfoList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedContactInfoList') }})
    added_mobile_device_id_list: Optional[shared_mobiledeviceidlist.MobileDeviceIDList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedMobileDeviceIdList') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    
