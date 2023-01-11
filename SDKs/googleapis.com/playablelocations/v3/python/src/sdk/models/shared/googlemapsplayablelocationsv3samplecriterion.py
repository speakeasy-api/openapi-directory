import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsplayablelocationsv3samplefilter as shared_googlemapsplayablelocationsv3samplefilter


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3SampleCriterion:
    r"""GoogleMapsPlayablelocationsV3SampleCriterion
    Encapsulates a filter criterion for searching for a set of playable locations.
    """
    
    fields_to_return: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsToReturn') }})
    filter: Optional[shared_googlemapsplayablelocationsv3samplefilter.GoogleMapsPlayablelocationsV3SampleFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    game_object_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameObjectType') }})
    
