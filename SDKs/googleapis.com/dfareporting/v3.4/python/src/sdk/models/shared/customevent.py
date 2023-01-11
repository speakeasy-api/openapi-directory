import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customeventclickannotation as shared_customeventclickannotation
from ..shared import customeventimpressionannotation as shared_customeventimpressionannotation
from ..shared import customvariable as shared_customvariable
from ..shared import customeventinsert as shared_customeventinsert

class CustomEventEventTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INSERT = "INSERT"
    ANNOTATE = "ANNOTATE"


@dataclass_json
@dataclasses.dataclass
class CustomEvent:
    r"""CustomEvent
    Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
    """
    
    annotate_click_event: Optional[shared_customeventclickannotation.CustomEventClickAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotateClickEvent') }})
    annotate_impression_event: Optional[shared_customeventimpressionannotation.CustomEventImpressionAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotateImpressionEvent') }})
    custom_variables: Optional[list[shared_customvariable.CustomVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVariables') }})
    event_type: Optional[CustomEventEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    floodlight_configuration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigurationId') }})
    insert_event: Optional[shared_customeventinsert.CustomEventInsert] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertEvent') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    ordinal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordinal') }})
    timestamp_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampMicros') }})
    
