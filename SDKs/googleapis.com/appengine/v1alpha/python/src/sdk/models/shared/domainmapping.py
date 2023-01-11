import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcerecord as shared_resourcerecord
from ..shared import sslsettings as shared_sslsettings


@dataclass_json
@dataclasses.dataclass
class DomainMapping:
    r"""DomainMapping
    A domain serving an App Engine application.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_records: Optional[list[shared_resourcerecord.ResourceRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRecords') }})
    ssl_settings: Optional[shared_sslsettings.SslSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslSettings') }})
    
