import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationresult as shared_validationresult


@dataclass_json
@dataclasses.dataclass
class ValidateCreateMembershipResponse:
    r"""ValidateCreateMembershipResponse
    Response message for the `GkeHub.ValidateCreateMembership` method.
    """
    
    validation_results: Optional[list[shared_validationresult.ValidationResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationResults') }})
    
