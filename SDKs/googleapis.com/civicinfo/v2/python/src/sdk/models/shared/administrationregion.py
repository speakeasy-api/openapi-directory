"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import administrativebody as shared_administrativebody
from ..shared import source as shared_source
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AdministrationRegion:
    r"""Describes information about a regional election administrative area."""
    
    election_administration_body: Optional[shared_administrativebody.AdministrativeBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('electionAdministrationBody'), 'exclude': lambda f: f is None }})
    r"""Information about an election administrative body (e.g. County Board of Elections)."""  
    local_jurisdiction: Optional[AdministrationRegion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('local_jurisdiction'), 'exclude': lambda f: f is None }})
    r"""Describes information about a regional election administrative area."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the jurisdiction."""  
    sources: Optional[list[shared_source.Source]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sources'), 'exclude': lambda f: f is None }})
    r"""A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources."""  
    