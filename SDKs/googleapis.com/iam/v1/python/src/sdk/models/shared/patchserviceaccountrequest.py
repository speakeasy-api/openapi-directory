import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceaccount as shared_serviceaccount


@dataclass_json
@dataclasses.dataclass
class PatchServiceAccountRequestInput:
    r"""PatchServiceAccountRequestInput
    The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.
    """
    
    service_account: Optional[shared_serviceaccount.ServiceAccountInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
