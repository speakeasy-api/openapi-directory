import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clickthroughurl as shared_clickthroughurl
from ..shared import companionclickthroughoverride as shared_companionclickthroughoverride
from ..shared import creativegroupassignment as shared_creativegroupassignment
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import richmediaexitoverride as shared_richmediaexitoverride


@dataclass_json
@dataclasses.dataclass
class CreativeAssignment:
    r"""CreativeAssignment
    Creative Assignment.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    apply_event_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyEventTags') }})
    click_through_url: Optional[shared_clickthroughurl.ClickThroughURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    companion_creative_overrides: Optional[list[shared_companionclickthroughoverride.CompanionClickThroughOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreativeOverrides') }})
    creative_group_assignments: Optional[list[shared_creativegroupassignment.CreativeGroupAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupAssignments') }})
    creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    creative_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeIdDimensionValue') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rich_media_exit_overrides: Optional[list[shared_richmediaexitoverride.RichMediaExitOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richMediaExitOverrides') }})
    sequence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    ssl_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCompliant') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
