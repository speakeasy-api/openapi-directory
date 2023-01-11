import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedatetime as shared_googletypedatetime
from ..shared import googletypedate as shared_googletypedate
from ..shared import googletypedecimal as shared_googletypedecimal
from ..shared import googletypemoney as shared_googletypemoney


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ReportValue:
    r"""GoogleCloudChannelV1ReportValue
    A single report value.
    """
    
    date_time_value: Optional[shared_googletypedatetime.GoogleTypeDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimeValue') }})
    date_value: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateValue') }})
    decimal_value: Optional[shared_googletypedecimal.GoogleTypeDecimal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalValue') }})
    int_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    money_value: Optional[shared_googletypemoney.GoogleTypeMoney] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyValue') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
