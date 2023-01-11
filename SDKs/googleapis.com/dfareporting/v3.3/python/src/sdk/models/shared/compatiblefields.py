import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crossdimensionreachreportcompatiblefields as shared_crossdimensionreachreportcompatiblefields
from ..shared import floodlightreportcompatiblefields as shared_floodlightreportcompatiblefields
from ..shared import pathtoconversionreportcompatiblefields as shared_pathtoconversionreportcompatiblefields
from ..shared import reachreportcompatiblefields as shared_reachreportcompatiblefields
from ..shared import reportcompatiblefields as shared_reportcompatiblefields


@dataclass_json
@dataclasses.dataclass
class CompatibleFields:
    r"""CompatibleFields
    Represents a response to the queryCompatibleFields method.
    """
    
    cross_dimension_reach_report_compatible_fields: Optional[shared_crossdimensionreachreportcompatiblefields.CrossDimensionReachReportCompatibleFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossDimensionReachReportCompatibleFields') }})
    floodlight_report_compatible_fields: Optional[shared_floodlightreportcompatiblefields.FloodlightReportCompatibleFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightReportCompatibleFields') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    path_to_conversion_report_compatible_fields: Optional[shared_pathtoconversionreportcompatiblefields.PathToConversionReportCompatibleFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathToConversionReportCompatibleFields') }})
    reach_report_compatible_fields: Optional[shared_reachreportcompatiblefields.ReachReportCompatibleFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachReportCompatibleFields') }})
    report_compatible_fields: Optional[shared_reportcompatiblefields.ReportCompatibleFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportCompatibleFields') }})
    
