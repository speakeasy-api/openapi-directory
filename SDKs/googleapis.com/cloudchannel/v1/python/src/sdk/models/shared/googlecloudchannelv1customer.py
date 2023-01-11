import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1cloudidentityinfo as shared_googlecloudchannelv1cloudidentityinfo
from ..shared import googletypepostaladdress as shared_googletypepostaladdress
from ..shared import googlecloudchannelv1contactinfo as shared_googlecloudchannelv1contactinfo
from ..shared import googlecloudchannelv1cloudidentityinfo as shared_googlecloudchannelv1cloudidentityinfo
from ..shared import googlecloudchannelv1contactinfo as shared_googlecloudchannelv1contactinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Customer:
    r"""GoogleCloudChannelV1Customer
    Entity representing a customer of a reseller or distributor.
    """
    
    alternate_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    channel_partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerId') }})
    cloud_identity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityId') }})
    cloud_identity_info: Optional[shared_googlecloudchannelv1cloudidentityinfo.GoogleCloudChannelV1CloudIdentityInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityInfo') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgDisplayName') }})
    org_postal_address: Optional[shared_googletypepostaladdress.GoogleTypePostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPostalAddress') }})
    primary_contact_info: Optional[shared_googlecloudchannelv1contactinfo.GoogleCloudChannelV1ContactInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactInfo') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CustomerInput:
    r"""GoogleCloudChannelV1CustomerInput
    Entity representing a customer of a reseller or distributor.
    """
    
    alternate_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    channel_partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerId') }})
    cloud_identity_info: Optional[shared_googlecloudchannelv1cloudidentityinfo.GoogleCloudChannelV1CloudIdentityInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityInfo') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    org_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgDisplayName') }})
    org_postal_address: Optional[shared_googletypepostaladdress.GoogleTypePostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPostalAddress') }})
    primary_contact_info: Optional[shared_googlecloudchannelv1contactinfo.GoogleCloudChannelV1ContactInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactInfo') }})
    
