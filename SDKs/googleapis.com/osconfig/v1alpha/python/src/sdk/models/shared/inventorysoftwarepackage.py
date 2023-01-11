import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryversionedpackage as shared_inventoryversionedpackage
from ..shared import inventorywindowsquickfixengineeringpackage as shared_inventorywindowsquickfixengineeringpackage
from ..shared import inventorywindowsapplication as shared_inventorywindowsapplication
from ..shared import inventorywindowsupdatepackage as shared_inventorywindowsupdatepackage
from ..shared import inventoryzypperpatch as shared_inventoryzypperpatch


@dataclass_json
@dataclasses.dataclass
class InventorySoftwarePackage:
    r"""InventorySoftwarePackage
    Software package information of the operating system.
    """
    
    apt_package: Optional[shared_inventoryversionedpackage.InventoryVersionedPackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aptPackage') }})
    cos_package: Optional[shared_inventoryversionedpackage.InventoryVersionedPackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosPackage') }})
    googet_package: Optional[shared_inventoryversionedpackage.InventoryVersionedPackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googetPackage') }})
    qfe_package: Optional[shared_inventorywindowsquickfixengineeringpackage.InventoryWindowsQuickFixEngineeringPackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qfePackage') }})
    windows_application: Optional[shared_inventorywindowsapplication.InventoryWindowsApplication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsApplication') }})
    wua_package: Optional[shared_inventorywindowsupdatepackage.InventoryWindowsUpdatePackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wuaPackage') }})
    yum_package: Optional[shared_inventoryversionedpackage.InventoryVersionedPackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yumPackage') }})
    zypper_package: Optional[shared_inventoryversionedpackage.InventoryVersionedPackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypperPackage') }})
    zypper_patch: Optional[shared_inventoryzypperpatch.InventoryZypperPatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypperPatch') }})
    
