import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountref as shared_accountref
from ..shared import profileref as shared_profileref
from ..shared import webpropertyref as shared_webpropertyref
from ..shared import userref as shared_userref


@dataclass_json
@dataclasses.dataclass
class EntityUserLinkEntity:
    r"""EntityUserLinkEntity
    Entity for this link. It can be an account, a web property, or a view (profile).
    """
    
    account_ref: Optional[shared_accountref.AccountRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    profile_ref: Optional[shared_profileref.ProfileRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileRef') }})
    web_property_ref: Optional[shared_webpropertyref.WebPropertyRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyRef') }})
    

@dataclass_json
@dataclasses.dataclass
class EntityUserLinkPermissions:
    r"""EntityUserLinkPermissions
    Permissions the user has for this entity.
    """
    
    effective: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective') }})
    local: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local') }})
    

@dataclass_json
@dataclasses.dataclass
class EntityUserLinkPermissionsInput:
    r"""EntityUserLinkPermissionsInput
    Permissions the user has for this entity.
    """
    
    local: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local') }})
    

@dataclass_json
@dataclasses.dataclass
class EntityUserLink:
    r"""EntityUserLink
    JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
    """
    
    entity: Optional[EntityUserLinkEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    permissions: Optional[EntityUserLinkPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    user_ref: Optional[shared_userref.UserRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRef') }})
    

@dataclass_json
@dataclasses.dataclass
class EntityUserLinkInput:
    r"""EntityUserLinkInput
    JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
    """
    
    entity: Optional[EntityUserLinkEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    permissions: Optional[EntityUserLinkPermissionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    user_ref: Optional[shared_userref.UserRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRef') }})
    
