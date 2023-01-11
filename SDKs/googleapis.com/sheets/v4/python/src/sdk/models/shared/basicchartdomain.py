import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartdata as shared_chartdata


@dataclass_json
@dataclasses.dataclass
class BasicChartDomain:
    r"""BasicChartDomain
    The domain of a chart. For example, if charting stock prices over time, this would be the date.
    """
    
    domain: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    reversed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reversed') }})
    
