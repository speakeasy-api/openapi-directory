import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linestyle as shared_linestyle
from ..shared import waterfallchartdomain as shared_waterfallchartdomain
from ..shared import waterfallchartseries as shared_waterfallchartseries
from ..shared import datalabel as shared_datalabel

class WaterfallChartSpecStackedTypeEnum(str, Enum):
    WATERFALL_STACKED_TYPE_UNSPECIFIED = "WATERFALL_STACKED_TYPE_UNSPECIFIED"
    STACKED = "STACKED"
    SEQUENTIAL = "SEQUENTIAL"


@dataclass_json
@dataclasses.dataclass
class WaterfallChartSpec:
    r"""WaterfallChartSpec
    A waterfall chart.
    """
    
    connector_line_style: Optional[shared_linestyle.LineStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorLineStyle') }})
    domain: Optional[shared_waterfallchartdomain.WaterfallChartDomain] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    first_value_is_total: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstValueIsTotal') }})
    hide_connector_lines: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideConnectorLines') }})
    series: Optional[list[shared_waterfallchartseries.WaterfallChartSeries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    stacked_type: Optional[WaterfallChartSpecStackedTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackedType') }})
    total_data_label: Optional[shared_datalabel.DataLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDataLabel') }})
    
