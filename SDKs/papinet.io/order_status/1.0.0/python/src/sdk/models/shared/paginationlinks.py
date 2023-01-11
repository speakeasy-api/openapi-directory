import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PaginationLinksFirst:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginationLinksLast:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginationLinksNext:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginationLinksPrev:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginationLinks:
    next: PaginationLinksNext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    first: Optional[PaginationLinksFirst] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[PaginationLinksLast] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    prev: Optional[PaginationLinksPrev] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    
