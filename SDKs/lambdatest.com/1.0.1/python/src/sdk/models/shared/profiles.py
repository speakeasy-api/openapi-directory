import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProfilesProfilesProfileConfigCredentials:
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfilesProfilesProfileConfigLocatorsPassword:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfilesProfilesProfileConfigLocatorsSubmit:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfilesProfilesProfileConfigLocatorsUsername:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfilesProfilesProfileConfigLocators:
    password: Optional[ProfilesProfilesProfileConfigLocatorsPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    submit: Optional[ProfilesProfilesProfileConfigLocatorsSubmit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submit') }})
    username: Optional[ProfilesProfilesProfileConfigLocatorsUsername] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfilesProfilesProfileConfig:
    credentials: Optional[ProfilesProfilesProfileConfigCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    locators: Optional[ProfilesProfilesProfileConfigLocators] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locators') }})
    login_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_url') }})
    profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_name') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfilesProfiles:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile_config: Optional[ProfilesProfilesProfileConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_config') }})
    

@dataclass_json
@dataclasses.dataclass
class Profiles:
    profiles: Optional[list[ProfilesProfiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profiles') }})
    
