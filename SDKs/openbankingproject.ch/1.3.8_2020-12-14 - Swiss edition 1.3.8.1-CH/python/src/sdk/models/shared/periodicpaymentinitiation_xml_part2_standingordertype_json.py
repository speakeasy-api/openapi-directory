import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dayofexecution_enum as shared_dayofexecution_enum
from ..shared import executionrule_enum as shared_executionrule_enum
from ..shared import frequencycode_enum as shared_frequencycode_enum


@dataclass_json
@dataclasses.dataclass
class PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON:
    r"""PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON
    The body part 2 of a periodic payment initation request containes the execution related informations
    of the periodic payment.
    
    """
    
    frequency: shared_frequencycode_enum.FrequencyCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    start_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    day_of_execution: Optional[shared_dayofexecution_enum.DayOfExecutionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfExecution') }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_rule: Optional[shared_executionrule_enum.ExecutionRuleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRule') }})
    
