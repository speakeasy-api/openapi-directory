import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import url as shared_url


@dataclass_json
@dataclasses.dataclass
class Statistics:
    close_approach_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_approach_count') }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated') }})
    nasa_jpl_url: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nasa_jpl_url') }})
    near_earth_object_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('near_earth_object_count') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
