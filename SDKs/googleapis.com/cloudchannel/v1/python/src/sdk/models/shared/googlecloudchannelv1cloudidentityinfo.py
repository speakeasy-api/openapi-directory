import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1edudata as shared_googlecloudchannelv1edudata

class GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "CUSTOMER_TYPE_UNSPECIFIED"
    DOMAIN = "DOMAIN"
    TEAM = "TEAM"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CloudIdentityInfoInput:
    r"""GoogleCloudChannelV1CloudIdentityInfoInput
    Cloud Identity information for the Cloud Channel Customer.
    """
    
    alternate_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    customer_type: Optional[GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerType') }})
    edu_data: Optional[shared_googlecloudchannelv1edudata.GoogleCloudChannelV1EduData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eduData') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CloudIdentityInfo:
    r"""GoogleCloudChannelV1CloudIdentityInfo
    Cloud Identity information for the Cloud Channel Customer.
    """
    
    admin_console_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminConsoleUri') }})
    alternate_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    customer_type: Optional[GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerType') }})
    edu_data: Optional[shared_googlecloudchannelv1edudata.GoogleCloudChannelV1EduData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eduData') }})
    is_domain_verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDomainVerified') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    primary_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDomain') }})
    
