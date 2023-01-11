import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpheadermatch as shared_httpheadermatch


@dataclass_json
@dataclasses.dataclass
class Destination:
    r"""Destination
    Specification of traffic destination attributes.
    """
    
    hosts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    http_header_match: Optional[shared_httpheadermatch.HTTPHeaderMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeaderMatch') }})
    methods: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
