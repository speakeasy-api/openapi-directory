import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import waterfallchartcustomsubtotal as shared_waterfallchartcustomsubtotal
from ..shared import chartdata as shared_chartdata
from ..shared import datalabel as shared_datalabel
from ..shared import waterfallchartcolumnstyle as shared_waterfallchartcolumnstyle


@dataclass_json
@dataclasses.dataclass
class WaterfallChartSeries:
    r"""WaterfallChartSeries
    A single series of data for a waterfall chart.
    """
    
    custom_subtotals: Optional[list[shared_waterfallchartcustomsubtotal.WaterfallChartCustomSubtotal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSubtotals') }})
    data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_label: Optional[shared_datalabel.DataLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLabel') }})
    hide_trailing_subtotal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTrailingSubtotal') }})
    negative_columns_style: Optional[shared_waterfallchartcolumnstyle.WaterfallChartColumnStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeColumnsStyle') }})
    positive_columns_style: Optional[shared_waterfallchartcolumnstyle.WaterfallChartColumnStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveColumnsStyle') }})
    subtotal_columns_style: Optional[shared_waterfallchartcolumnstyle.WaterfallChartColumnStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotalColumnsStyle') }})
    
