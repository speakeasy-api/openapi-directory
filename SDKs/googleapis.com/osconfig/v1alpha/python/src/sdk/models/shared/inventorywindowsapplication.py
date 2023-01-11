import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_


@dataclass_json
@dataclasses.dataclass
class InventoryWindowsApplication:
    r"""InventoryWindowsApplication
    Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    display_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayVersion') }})
    help_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpLink') }})
    install_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installDate') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    
