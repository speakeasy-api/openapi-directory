import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playerexperienceinfo as shared_playerexperienceinfo
from ..shared import profilesettings as shared_profilesettings

class PlayerFriendStatusEnum(str, Enum):
    FRIEND_STATUS_UNSPECIFIED = "FRIEND_STATUS_UNSPECIFIED"
    NO_RELATIONSHIP = "NO_RELATIONSHIP"
    FRIEND = "FRIEND"


@dataclass_json
@dataclasses.dataclass
class PlayerName:
    r"""PlayerName
    A representation of the individual components of the name.
    """
    
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclasses.dataclass
class Player:
    r"""Player
    A Player resource.
    """
    
    avatar_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarImageUrl') }})
    banner_url_landscape: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerUrlLandscape') }})
    banner_url_portrait: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerUrlPortrait') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    experience_info: Optional[shared_playerexperienceinfo.PlayerExperienceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experienceInfo') }})
    friend_status: Optional[PlayerFriendStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendStatus') }})
    game_player_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gamePlayerId') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[PlayerName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_player_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPlayerId') }})
    player_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    profile_settings: Optional[shared_profilesettings.ProfileSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileSettings') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
