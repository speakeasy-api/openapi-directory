import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountinfo as shared_accountinfo
from ..shared import driveoptions as shared_driveoptions
from ..shared import hangoutschatinfo as shared_hangoutschatinfo
from ..shared import hangoutschatoptions as shared_hangoutschatoptions
from ..shared import mailoptions as shared_mailoptions
from ..shared import orgunitinfo as shared_orgunitinfo
from ..shared import shareddriveinfo as shared_shareddriveinfo
from ..shared import sitesurlinfo as shared_sitesurlinfo
from ..shared import teamdriveinfo as shared_teamdriveinfo
from ..shared import voiceoptions as shared_voiceoptions

class QueryCorpusEnum(str, Enum):
    CORPUS_TYPE_UNSPECIFIED = "CORPUS_TYPE_UNSPECIFIED"
    DRIVE = "DRIVE"
    MAIL = "MAIL"
    GROUPS = "GROUPS"
    HANGOUTS_CHAT = "HANGOUTS_CHAT"
    VOICE = "VOICE"

class QueryDataScopeEnum(str, Enum):
    DATA_SCOPE_UNSPECIFIED = "DATA_SCOPE_UNSPECIFIED"
    ALL_DATA = "ALL_DATA"
    HELD_DATA = "HELD_DATA"
    UNPROCESSED_DATA = "UNPROCESSED_DATA"

class QueryMethodEnum(str, Enum):
    SEARCH_METHOD_UNSPECIFIED = "SEARCH_METHOD_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    ORG_UNIT = "ORG_UNIT"
    TEAM_DRIVE = "TEAM_DRIVE"
    ENTIRE_ORG = "ENTIRE_ORG"
    ROOM = "ROOM"
    SITES_URL = "SITES_URL"
    SHARED_DRIVE = "SHARED_DRIVE"

class QuerySearchMethodEnum(str, Enum):
    SEARCH_METHOD_UNSPECIFIED = "SEARCH_METHOD_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    ORG_UNIT = "ORG_UNIT"
    TEAM_DRIVE = "TEAM_DRIVE"
    ENTIRE_ORG = "ENTIRE_ORG"
    ROOM = "ROOM"
    SITES_URL = "SITES_URL"
    SHARED_DRIVE = "SHARED_DRIVE"


@dataclass_json
@dataclasses.dataclass
class Query:
    r"""Query
    The query definition used for search and export.
    """
    
    account_info: Optional[shared_accountinfo.AccountInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountInfo') }})
    corpus: Optional[QueryCorpusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corpus') }})
    data_scope: Optional[QueryDataScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataScope') }})
    drive_options: Optional[shared_driveoptions.DriveOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveOptions') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    hangouts_chat_info: Optional[shared_hangoutschatinfo.HangoutsChatInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatInfo') }})
    hangouts_chat_options: Optional[shared_hangoutschatoptions.HangoutsChatOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatOptions') }})
    mail_options: Optional[shared_mailoptions.MailOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailOptions') }})
    method: Optional[QueryMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    org_unit_info: Optional[shared_orgunitinfo.OrgUnitInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitInfo') }})
    search_method: Optional[QuerySearchMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchMethod') }})
    shared_drive_info: Optional[shared_shareddriveinfo.SharedDriveInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedDriveInfo') }})
    sites_url_info: Optional[shared_sitesurlinfo.SitesURLInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitesUrlInfo') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    team_drive_info: Optional[shared_teamdriveinfo.TeamDriveInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveInfo') }})
    terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    voice_options: Optional[shared_voiceoptions.VoiceOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceOptions') }})
    
