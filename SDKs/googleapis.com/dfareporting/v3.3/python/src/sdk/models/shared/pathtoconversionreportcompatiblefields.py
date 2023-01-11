import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimension as shared_dimension
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class PathToConversionReportCompatibleFields:
    r"""PathToConversionReportCompatibleFields
    Represents fields that are compatible to be selected for a report of type \"PATH_TO_CONVERSION\".
    """
    
    conversion_dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionDimensions') }})
    custom_floodlight_variables: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFloodlightVariables') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    per_interaction_dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perInteractionDimensions') }})
    
