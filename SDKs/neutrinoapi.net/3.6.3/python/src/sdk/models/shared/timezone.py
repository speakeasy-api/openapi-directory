"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Timezone:
    r"""Map containing timezone details"""
    
    abbr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('abbr') }})
    r"""The time zone abbreviation"""  
    date_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date') }})
    r"""The current date at the time zone (ISO 8601 format 'YYYY-MM-DD')"""  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The time zone ID as per the IANA time zone database (tzdata)"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The full time zone name"""  
    offset: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('offset') }})
    r"""The UTC offset for the time zone (ISO 8601 format '±hh:mm')"""  
    time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('time') }})
    r"""The current time at the time zone (ISO 8601 format 'hh:mm:ss.sss')"""  
    