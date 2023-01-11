import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditevent as shared_auditevent
from ..shared import paginationlinks as shared_paginationlinks
from ..shared import paginationdata as shared_paginationdata


@dataclass_json
@dataclasses.dataclass
class AuditRespEmbedded:
    r"""AuditRespEmbedded
    Container containing the `events` array.
    """
    
    events: Optional[list[shared_auditevent.AuditEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclasses.dataclass
class AuditResp:
    embedded: Optional[AuditRespEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[shared_paginationlinks.PaginationLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page: Optional[shared_paginationdata.PaginationData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
