import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import sitecontact as shared_sitecontact
from ..shared import sitesettings as shared_sitesettings
from ..shared import sitevideosettings as shared_sitevideosettings


@dataclass_json
@dataclasses.dataclass
class Site:
    r"""Site
    Contains properties of a site.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    approved: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    directory_site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteId') }})
    directory_site_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteIdDimensionValue') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_contacts: Optional[list[shared_sitecontact.SiteContact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteContacts') }})
    site_settings: Optional[shared_sitesettings.SiteSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSettings') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    video_settings: Optional[shared_sitevideosettings.SiteVideoSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoSettings') }})
    
