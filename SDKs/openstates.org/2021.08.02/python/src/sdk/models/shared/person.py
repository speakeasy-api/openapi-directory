import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currentrole as shared_currentrole
from ..shared import compactjurisdiction as shared_compactjurisdiction
from ..shared import link as shared_link
from ..shared import office as shared_office
from ..shared import altidentifier as shared_altidentifier
from ..shared import altname as shared_altname


@dataclass_json
@dataclasses.dataclass
class Person:
    birth_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('birth_date') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    death_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('death_date') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    extras: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    family_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('family_name') }})
    gender: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    given_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('given_name') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    jurisdiction: shared_compactjurisdiction.CompactJurisdiction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    openstates_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openstates_url') }})
    party: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_role: Optional[shared_currentrole.CurrentRole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_role') }})
    links: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    offices: Optional[list[shared_office.Office]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offices') }})
    other_identifiers: Optional[list[shared_altidentifier.AltIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_identifiers') }})
    other_names: Optional[list[shared_altname.AltName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_names') }})
    sources: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
