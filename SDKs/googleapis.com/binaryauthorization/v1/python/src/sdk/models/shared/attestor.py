import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userownedgrafeasnote as shared_userownedgrafeasnote
from ..shared import userownedgrafeasnote as shared_userownedgrafeasnote


@dataclass_json
@dataclasses.dataclass
class AttestorInput:
    r"""AttestorInput
    An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_owned_grafeas_note: Optional[shared_userownedgrafeasnote.UserOwnedGrafeasNoteInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOwnedGrafeasNote') }})
    

@dataclass_json
@dataclasses.dataclass
class Attestor:
    r"""Attestor
    An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_owned_grafeas_note: Optional[shared_userownedgrafeasnote.UserOwnedGrafeasNote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOwnedGrafeasNote') }})
    
