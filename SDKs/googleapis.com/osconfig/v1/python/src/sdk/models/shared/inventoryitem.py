import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventorysoftwarepackage as shared_inventorysoftwarepackage

class InventoryItemOriginTypeEnum(str, Enum):
    ORIGIN_TYPE_UNSPECIFIED = "ORIGIN_TYPE_UNSPECIFIED"
    INVENTORY_REPORT = "INVENTORY_REPORT"

class InventoryItemTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    INSTALLED_PACKAGE = "INSTALLED_PACKAGE"
    AVAILABLE_PACKAGE = "AVAILABLE_PACKAGE"


@dataclass_json
@dataclasses.dataclass
class InventoryItem:
    available_package: Optional[shared_inventorysoftwarepackage.InventorySoftwarePackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availablePackage') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    installed_package: Optional[shared_inventorysoftwarepackage.InventorySoftwarePackage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedPackage') }})
    origin_type: Optional[InventoryItemOriginTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originType') }})
    type: Optional[InventoryItemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
