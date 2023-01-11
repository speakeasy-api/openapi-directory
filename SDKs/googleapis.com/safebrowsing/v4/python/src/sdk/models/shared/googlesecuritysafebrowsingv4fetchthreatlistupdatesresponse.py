import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse as shared_googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse:
    list_update_responses: Optional[list[shared_googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listUpdateResponses') }})
    minimum_wait_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumWaitDuration') }})
    
