import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1updateservicerequest as shared_googlefirebaseappcheckv1updateservicerequest


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest:
    r"""GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
    Request message for the BatchUpdateServices method.
    """
    
    requests: Optional[list[shared_googlefirebaseappcheckv1updateservicerequest.GoogleFirebaseAppcheckV1UpdateServiceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
