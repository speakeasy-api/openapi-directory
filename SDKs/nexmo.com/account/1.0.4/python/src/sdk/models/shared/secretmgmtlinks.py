import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SecretMgmtLinksSelf:
    r"""SecretMgmtLinksSelf
    This resource
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class SecretMgmtLinks:
    r"""SecretMgmtLinks
    Links related to this resource
    """
    
    self: Optional[SecretMgmtLinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
