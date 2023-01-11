import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conversion as shared_conversion
from ..shared import conversionerror as shared_conversionerror


@dataclass_json
@dataclasses.dataclass
class ConversionStatus:
    r"""ConversionStatus
    The original conversion that was inserted or updated and whether there were any errors.
    """
    
    conversion: Optional[shared_conversion.Conversion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion') }})
    errors: Optional[list[shared_conversionerror.ConversionError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
