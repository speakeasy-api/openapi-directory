import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appcontext as shared_appcontext
from ..shared import auctioncontext as shared_auctioncontext
from ..shared import locationcontext as shared_locationcontext
from ..shared import platformcontext as shared_platformcontext
from ..shared import securitycontext as shared_securitycontext

class ServingContextAllEnum(str, Enum):
    SIMPLE_CONTEXT = "SIMPLE_CONTEXT"


@dataclass_json
@dataclasses.dataclass
class ServingContext:
    r"""ServingContext
    The serving context for this restriction.
    """
    
    all: Optional[ServingContextAllEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    app_type: Optional[shared_appcontext.AppContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appType') }})
    auction_type: Optional[shared_auctioncontext.AuctionContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionType') }})
    location: Optional[shared_locationcontext.LocationContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    platform: Optional[shared_platformcontext.PlatformContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    security_type: Optional[shared_securitycontext.SecurityContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityType') }})
    
