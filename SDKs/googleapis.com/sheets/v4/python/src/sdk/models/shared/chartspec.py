import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import basicchartspec as shared_basicchartspec
from ..shared import bubblechartspec as shared_bubblechartspec
from ..shared import candlestickchartspec as shared_candlestickchartspec
from ..shared import datasourcechartproperties as shared_datasourcechartproperties
from ..shared import filterspec as shared_filterspec
from ..shared import histogramchartspec as shared_histogramchartspec
from ..shared import orgchartspec as shared_orgchartspec
from ..shared import piechartspec as shared_piechartspec
from ..shared import scorecardchartspec as shared_scorecardchartspec
from ..shared import sortspec as shared_sortspec
from ..shared import textformat as shared_textformat
from ..shared import textposition as shared_textposition
from ..shared import treemapchartspec as shared_treemapchartspec
from ..shared import waterfallchartspec as shared_waterfallchartspec

class ChartSpecHiddenDimensionStrategyEnum(str, Enum):
    CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"
    SKIP_HIDDEN_ROWS_AND_COLUMNS = "SKIP_HIDDEN_ROWS_AND_COLUMNS"
    SKIP_HIDDEN_ROWS = "SKIP_HIDDEN_ROWS"
    SKIP_HIDDEN_COLUMNS = "SKIP_HIDDEN_COLUMNS"
    SHOW_ALL = "SHOW_ALL"


@dataclass_json
@dataclasses.dataclass
class ChartSpec:
    r"""ChartSpec
    The specifications of a chart.
    """
    
    alt_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    background_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    basic_chart: Optional[shared_basicchartspec.BasicChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicChart') }})
    bubble_chart: Optional[shared_bubblechartspec.BubbleChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleChart') }})
    candlestick_chart: Optional[shared_candlestickchartspec.CandlestickChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candlestickChart') }})
    data_source_chart_properties: Optional[shared_datasourcechartproperties.DataSourceChartProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceChartProperties') }})
    filter_specs: Optional[list[shared_filterspec.FilterSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    font_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontName') }})
    hidden_dimension_strategy: Optional[ChartSpecHiddenDimensionStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenDimensionStrategy') }})
    histogram_chart: Optional[shared_histogramchartspec.HistogramChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramChart') }})
    maximized: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximized') }})
    org_chart: Optional[shared_orgchartspec.OrgChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgChart') }})
    pie_chart: Optional[shared_piechartspec.PieChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pieChart') }})
    scorecard_chart: Optional[shared_scorecardchartspec.ScorecardChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorecardChart') }})
    sort_specs: Optional[list[shared_sortspec.SortSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    subtitle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    subtitle_text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitleTextFormat') }})
    subtitle_text_position: Optional[shared_textposition.TextPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitleTextPosition') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleTextFormat') }})
    title_text_position: Optional[shared_textposition.TextPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleTextPosition') }})
    treemap_chart: Optional[shared_treemapchartspec.TreemapChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treemapChart') }})
    waterfall_chart: Optional[shared_waterfallchartspec.WaterfallChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waterfallChart') }})
    
