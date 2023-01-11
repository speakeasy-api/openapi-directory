import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publisherprofilemobileapplication as shared_publisherprofilemobileapplication


@dataclass_json
@dataclasses.dataclass
class PublisherProfile:
    r"""PublisherProfile
    The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
    """
    
    audience_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceDescription') }})
    direct_deals_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDealsContact') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    is_parent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isParent') }})
    logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    media_kit_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaKitUrl') }})
    mobile_apps: Optional[list[shared_publisherprofilemobileapplication.PublisherProfileMobileApplication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApps') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overview: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    pitch_statement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitchStatement') }})
    programmatic_deals_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticDealsContact') }})
    publisher_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherCode') }})
    sample_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePageUrl') }})
    top_headlines: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topHeadlines') }})
    
