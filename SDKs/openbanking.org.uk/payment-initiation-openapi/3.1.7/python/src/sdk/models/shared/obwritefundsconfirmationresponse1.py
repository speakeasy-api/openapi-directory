import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObWriteFundsConfirmationResponse1DataFundsAvailableResult:
    r"""ObWriteFundsConfirmationResponse1DataFundsAvailableResult
    Result of a funds availability check.
    """
    
    funds_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailable') }})
    funds_available_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailableDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteFundsConfirmationResponse1Data:
    funds_available_result: Optional[ObWriteFundsConfirmationResponse1DataFundsAvailableResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailableResult') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteFundsConfirmationResponse1:
    data: ObWriteFundsConfirmationResponse1Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
