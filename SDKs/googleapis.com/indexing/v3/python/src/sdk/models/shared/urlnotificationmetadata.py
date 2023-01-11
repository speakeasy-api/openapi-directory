import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urlnotification as shared_urlnotification


@dataclass_json
@dataclasses.dataclass
class URLNotificationMetadata:
    r"""URLNotificationMetadata
    Summary of the most recent Indexing API notifications successfully received, for a given URL.
    """
    
    latest_remove: Optional[shared_urlnotification.URLNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRemove') }})
    latest_update: Optional[shared_urlnotification.URLNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestUpdate') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
