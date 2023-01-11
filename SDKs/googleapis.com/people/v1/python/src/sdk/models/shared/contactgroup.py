import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupclientdata as shared_groupclientdata
from ..shared import contactgroupmetadata as shared_contactgroupmetadata

class ContactGroupGroupTypeEnum(str, Enum):
    GROUP_TYPE_UNSPECIFIED = "GROUP_TYPE_UNSPECIFIED"
    USER_CONTACT_GROUP = "USER_CONTACT_GROUP"
    SYSTEM_CONTACT_GROUP = "SYSTEM_CONTACT_GROUP"


@dataclass_json
@dataclasses.dataclass
class ContactGroup:
    r"""ContactGroup
    A contact group.
    """
    
    client_data: Optional[list[shared_groupclientdata.GroupClientData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    formatted_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedName') }})
    group_type: Optional[ContactGroupGroupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    member_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberCount') }})
    member_resource_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberResourceNames') }})
    metadata: Optional[shared_contactgroupmetadata.ContactGroupMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    

@dataclass_json
@dataclasses.dataclass
class ContactGroupInput:
    r"""ContactGroupInput
    A contact group.
    """
    
    client_data: Optional[list[shared_groupclientdata.GroupClientData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
