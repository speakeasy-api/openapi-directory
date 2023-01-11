import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betaservice as shared_googlefirebaseappcheckv1betaservice


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse
    Response message for the BatchUpdateServices method.
    """
    
    services: Optional[list[shared_googlefirebaseappcheckv1betaservice.GoogleFirebaseAppcheckV1betaService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
