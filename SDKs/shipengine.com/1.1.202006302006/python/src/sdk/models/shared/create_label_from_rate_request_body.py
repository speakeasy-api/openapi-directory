import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label_download_type_enum as shared_label_download_type_enum
from ..shared import validate_address_enum as shared_validate_address_enum


@dataclass_json
@dataclasses.dataclass
class CreateLabelFromRateRequestBody:
    r"""CreateLabelFromRateRequestBody
    A purchase label without shipment resource
    """
    
    label_download_type: Optional[shared_label_download_type_enum.LabelDownloadTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_download_type') }})
    label_format: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_format') }})
    label_layout: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_layout') }})
    validate_address: Optional[shared_validate_address_enum.ValidateAddressEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validate_address') }})
    
