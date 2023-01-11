import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label_charge_event_enum as shared_label_charge_event_enum


@dataclass_json
@dataclasses.dataclass
class CreateReturnLabelRequestBody:
    r"""CreateReturnLabelRequestBody
    A create return label request body
    """
    
    charge_event: Optional[shared_label_charge_event_enum.LabelChargeEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charge_event') }})
    label_download_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_download_type') }})
    label_format: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_format') }})
    label_image_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_image_id') }})
    label_layout: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_layout') }})
    
