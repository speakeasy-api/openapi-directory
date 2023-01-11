import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billabstract as shared_billabstract
from ..shared import billaction as shared_billaction
from ..shared import billdocumentorversion as shared_billdocumentorversion
from ..shared import organization as shared_organization
from ..shared import compactjurisdiction as shared_compactjurisdiction
from ..shared import billidentifier as shared_billidentifier
from ..shared import billtitle as shared_billtitle
from ..shared import link as shared_link
from ..shared import billsponsorship as shared_billsponsorship
from ..shared import voteevent as shared_voteevent


@dataclass_json
@dataclasses.dataclass
class Bill:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_organization: shared_organization.Organization = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_organization') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    jurisdiction: shared_compactjurisdiction.CompactJurisdiction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    openstates_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openstates_url') }})
    session: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    abstracts: Optional[list[shared_billabstract.BillAbstract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abstracts') }})
    actions: Optional[list[shared_billaction.BillAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    classification: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    documents: Optional[list[shared_billdocumentorversion.BillDocumentOrVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    extras: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    first_action_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_action_date') }})
    latest_action_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_action_date') }})
    latest_action_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_action_description') }})
    latest_passage_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_passage_date') }})
    other_identifiers: Optional[list[shared_billidentifier.BillIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_identifiers') }})
    other_titles: Optional[list[shared_billtitle.BillTitle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_titles') }})
    sources: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    sponsorships: Optional[list[shared_billsponsorship.BillSponsorship]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sponsorships') }})
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    versions: Optional[list[shared_billdocumentorversion.BillDocumentOrVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    votes: Optional[list[shared_voteevent.VoteEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('votes') }})
    
