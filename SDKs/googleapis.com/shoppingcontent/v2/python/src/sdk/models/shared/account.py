import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountadwordslink as shared_accountadwordslink
from ..shared import accountbusinessinformation as shared_accountbusinessinformation
from ..shared import accountgooglemybusinesslink as shared_accountgooglemybusinesslink
from ..shared import accountuser as shared_accountuser
from ..shared import accountyoutubechannellink as shared_accountyoutubechannellink


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
    """
    
    adult_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adultContent') }})
    adwords_links: Optional[list[shared_accountadwordslink.AccountAdwordsLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adwordsLinks') }})
    business_information: Optional[shared_accountbusinessinformation.AccountBusinessInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessInformation') }})
    google_my_business_link: Optional[shared_accountgooglemybusinesslink.AccountGoogleMyBusinessLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleMyBusinessLink') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reviews_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewsUrl') }})
    seller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerId') }})
    users: Optional[list[shared_accountuser.AccountUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    website_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    youtube_channel_links: Optional[list[shared_accountyoutubechannellink.AccountYouTubeChannelLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeChannelLinks') }})
    
