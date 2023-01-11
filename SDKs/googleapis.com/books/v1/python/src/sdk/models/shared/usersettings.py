import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UsersettingsNotesExport:
    r"""UsersettingsNotesExport
    User settings in sub-objects, each for different purposes.
    """
    
    folder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderName') }})
    is_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UsersettingsNotificationMatchMyInterests:
    opted_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclasses.dataclass
class UsersettingsNotificationMoreFromAuthors:
    opted_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclasses.dataclass
class UsersettingsNotificationMoreFromSeries:
    opted_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclasses.dataclass
class UsersettingsNotificationPriceDrop:
    opted_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclasses.dataclass
class UsersettingsNotificationRewardExpirations:
    opted_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclasses.dataclass
class UsersettingsNotification:
    match_my_interests: Optional[UsersettingsNotificationMatchMyInterests] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchMyInterests') }})
    more_from_authors: Optional[UsersettingsNotificationMoreFromAuthors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreFromAuthors') }})
    more_from_series: Optional[UsersettingsNotificationMoreFromSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreFromSeries') }})
    price_drop: Optional[UsersettingsNotificationPriceDrop] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDrop') }})
    reward_expirations: Optional[UsersettingsNotificationRewardExpirations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewardExpirations') }})
    

@dataclass_json
@dataclasses.dataclass
class Usersettings:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    notes_export: Optional[UsersettingsNotesExport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notesExport') }})
    notification: Optional[UsersettingsNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    
