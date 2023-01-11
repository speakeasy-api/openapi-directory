import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import directorysitesettings as shared_directorysitesettings

class DirectorySiteInpageTagFormatsEnum(str, Enum):
    STANDARD = "STANDARD"
    IFRAME_JAVASCRIPT_INPAGE = "IFRAME_JAVASCRIPT_INPAGE"
    INTERNAL_REDIRECT_INPAGE = "INTERNAL_REDIRECT_INPAGE"
    JAVASCRIPT_INPAGE = "JAVASCRIPT_INPAGE"

class DirectorySiteInterstitialTagFormatsEnum(str, Enum):
    IFRAME_JAVASCRIPT_INTERSTITIAL = "IFRAME_JAVASCRIPT_INTERSTITIAL"
    INTERNAL_REDIRECT_INTERSTITIAL = "INTERNAL_REDIRECT_INTERSTITIAL"
    JAVASCRIPT_INTERSTITIAL = "JAVASCRIPT_INTERSTITIAL"


@dataclass_json
@dataclasses.dataclass
class DirectorySite:
    r"""DirectorySite
    DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    inpage_tag_formats: Optional[list[DirectorySiteInpageTagFormatsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inpageTagFormats') }})
    interstitial_tag_formats: Optional[list[DirectorySiteInterstitialTagFormatsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interstitialTagFormats') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    settings: Optional[shared_directorysitesettings.DirectorySiteSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
