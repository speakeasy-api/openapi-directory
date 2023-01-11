import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import committeeclassification_enum as shared_committeeclassification_enum
from ..shared import link as shared_link
from ..shared import committeemembership as shared_committeemembership
from ..shared import altname as shared_altname


@dataclass_json
@dataclasses.dataclass
class Committee:
    classification: shared_committeeclassification_enum.CommitteeClassificationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    extras: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    links: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    memberships: Optional[list[shared_committeemembership.CommitteeMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    other_names: Optional[list[shared_altname.AltName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_names') }})
    sources: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
