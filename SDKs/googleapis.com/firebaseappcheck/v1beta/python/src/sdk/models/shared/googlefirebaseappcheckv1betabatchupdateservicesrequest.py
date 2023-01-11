import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betaupdateservicerequest as shared_googlefirebaseappcheckv1betaupdateservicerequest


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest:
    r"""GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest
    Request message for the BatchUpdateServices method.
    """
    
    requests: Optional[list[shared_googlefirebaseappcheckv1betaupdateservicerequest.GoogleFirebaseAppcheckV1betaUpdateServiceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
