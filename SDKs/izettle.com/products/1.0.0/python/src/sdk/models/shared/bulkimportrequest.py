import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fullproductupdaterequest as shared_fullproductupdaterequest


@dataclass_json
@dataclasses.dataclass
class BulkImportRequest:
    products: list[shared_fullproductupdaterequest.FullProductUpdateRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
