import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpassword as shared_userpassword
from ..shared import primaryinstancesettings as shared_primaryinstancesettings
from ..shared import userpassword as shared_userpassword
from ..shared import primaryinstancesettings as shared_primaryinstancesettings


@dataclass_json
@dataclasses.dataclass
class AlloyDbSettings:
    r"""AlloyDbSettings
    Settings for creating an AlloyDB cluster.
    """
    
    initial_user: Optional[shared_userpassword.UserPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialUser') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    primary_instance_settings: Optional[shared_primaryinstancesettings.PrimaryInstanceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryInstanceSettings') }})
    vpc_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    

@dataclass_json
@dataclasses.dataclass
class AlloyDbSettingsInput:
    r"""AlloyDbSettingsInput
    Settings for creating an AlloyDB cluster.
    """
    
    initial_user: Optional[shared_userpassword.UserPasswordInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialUser') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    primary_instance_settings: Optional[shared_primaryinstancesettings.PrimaryInstanceSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryInstanceSettings') }})
    vpc_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    
