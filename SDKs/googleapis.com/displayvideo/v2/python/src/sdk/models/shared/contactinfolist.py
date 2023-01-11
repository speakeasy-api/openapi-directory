import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactinfo as shared_contactinfo


@dataclass_json
@dataclasses.dataclass
class ContactInfoList:
    r"""ContactInfoList
    Wrapper message for a list of contact information defining Customer Match audience members.
    """
    
    contact_infos: Optional[list[shared_contactinfo.ContactInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfos') }})
    
