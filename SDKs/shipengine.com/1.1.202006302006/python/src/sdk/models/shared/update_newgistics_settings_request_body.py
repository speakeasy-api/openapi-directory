import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateNewgisticsSettingsRequestBody:
    r"""UpdateNewgisticsSettingsRequestBody
    A newgistics account settings request body
    """
    
    include_barcode_with_order_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_barcode_with_order_number') }})
    receive_email_on_manifest_processing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receive_email_on_manifest_processing') }})
    
