import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applianceversion as shared_applianceversion


@dataclass_json
@dataclasses.dataclass
class AvailableUpdates:
    r"""AvailableUpdates
    Holds informatiom about the available versions for upgrade.
    """
    
    in_place_update: Optional[shared_applianceversion.ApplianceVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inPlaceUpdate') }})
    new_deployable_appliance: Optional[shared_applianceversion.ApplianceVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newDeployableAppliance') }})
    
