import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import helddrivequery as shared_helddrivequery
from ..shared import heldgroupsquery as shared_heldgroupsquery
from ..shared import heldhangoutschatquery as shared_heldhangoutschatquery
from ..shared import heldmailquery as shared_heldmailquery
from ..shared import heldvoicequery as shared_heldvoicequery


@dataclass_json
@dataclasses.dataclass
class CorpusQuery:
    r"""CorpusQuery
    Service-specific options for holds.
    """
    
    drive_query: Optional[shared_helddrivequery.HeldDriveQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveQuery') }})
    groups_query: Optional[shared_heldgroupsquery.HeldGroupsQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsQuery') }})
    hangouts_chat_query: Optional[shared_heldhangoutschatquery.HeldHangoutsChatQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatQuery') }})
    mail_query: Optional[shared_heldmailquery.HeldMailQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailQuery') }})
    voice_query: Optional[shared_heldvoicequery.HeldVoiceQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceQuery') }})
    
