import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import driveexportoptions as shared_driveexportoptions
from ..shared import groupsexportoptions as shared_groupsexportoptions
from ..shared import hangoutschatexportoptions as shared_hangoutschatexportoptions
from ..shared import mailexportoptions as shared_mailexportoptions
from ..shared import voiceexportoptions as shared_voiceexportoptions

class ExportOptionsRegionEnum(str, Enum):
    EXPORT_REGION_UNSPECIFIED = "EXPORT_REGION_UNSPECIFIED"
    ANY = "ANY"
    US = "US"
    EUROPE = "EUROPE"


@dataclass_json
@dataclasses.dataclass
class ExportOptions:
    r"""ExportOptions
    Additional options for exports
    """
    
    drive_options: Optional[shared_driveexportoptions.DriveExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveOptions') }})
    groups_options: Optional[shared_groupsexportoptions.GroupsExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsOptions') }})
    hangouts_chat_options: Optional[shared_hangoutschatexportoptions.HangoutsChatExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatOptions') }})
    mail_options: Optional[shared_mailexportoptions.MailExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailOptions') }})
    region: Optional[ExportOptionsRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    voice_options: Optional[shared_voiceexportoptions.VoiceExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceOptions') }})
    
