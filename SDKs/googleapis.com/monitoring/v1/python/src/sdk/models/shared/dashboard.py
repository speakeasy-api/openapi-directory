import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnlayout as shared_columnlayout
from ..shared import dashboardfilter as shared_dashboardfilter
from ..shared import gridlayout as shared_gridlayout
from ..shared import mosaiclayout as shared_mosaiclayout
from ..shared import rowlayout as shared_rowlayout


@dataclass_json
@dataclasses.dataclass
class Dashboard:
    r"""Dashboard
    A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
    """
    
    column_layout: Optional[shared_columnlayout.ColumnLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnLayout') }})
    dashboard_filters: Optional[list[shared_dashboardfilter.DashboardFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardFilters') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    grid_layout: Optional[shared_gridlayout.GridLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gridLayout') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mosaic_layout: Optional[shared_mosaiclayout.MosaicLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mosaicLayout') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    row_layout: Optional[shared_rowlayout.RowLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLayout') }})
    
