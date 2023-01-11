import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label


@dataclass_json
@dataclasses.dataclass
class ModifyLabelsResponse:
    r"""ModifyLabelsResponse
    Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    modified_labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedLabels') }})
    
