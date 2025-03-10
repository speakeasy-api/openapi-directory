"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import freebusycalendar as shared_freebusycalendar
from ..shared import freebusygroup as shared_freebusygroup
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FreeBusyResponse:
    r"""Successful response"""
    
    calendars: Optional[dict[str, shared_freebusycalendar.FreeBusyCalendar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('calendars'), 'exclude': lambda f: f is None }})
    r"""List of free/busy information for calendars."""  
    groups: Optional[dict[str, shared_freebusygroup.FreeBusyGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('groups'), 'exclude': lambda f: f is None }})
    r"""Expansion of groups."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Type of the resource (\\"calendar#freeBusy\\")."""  
    time_max: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timeMax'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The end of the interval."""  
    time_min: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timeMin'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The start of the interval."""  
    