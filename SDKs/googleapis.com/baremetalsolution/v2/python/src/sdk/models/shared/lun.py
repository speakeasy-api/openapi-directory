import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LunMultiprotocolTypeEnum(str, Enum):
    MULTIPROTOCOL_TYPE_UNSPECIFIED = "MULTIPROTOCOL_TYPE_UNSPECIFIED"
    LINUX = "LINUX"

class LunStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    READY = "READY"
    DELETING = "DELETING"

class LunStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"


@dataclass_json
@dataclasses.dataclass
class Lun:
    r"""Lun
    A storage volume logical unit number (LUN).
    """
    
    boot_lun: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootLun') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    multiprotocol_type: Optional[LunMultiprotocolTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiprotocolType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    shareable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareable') }})
    size_gb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    state: Optional[LunStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    storage_type: Optional[LunStorageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    storage_volume: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageVolume') }})
    wwid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wwid') }})
    

@dataclass_json
@dataclasses.dataclass
class LunInput:
    r"""LunInput
    A storage volume logical unit number (LUN).
    """
    
    boot_lun: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootLun') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    multiprotocol_type: Optional[LunMultiprotocolTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiprotocolType') }})
    shareable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareable') }})
    size_gb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    state: Optional[LunStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    storage_type: Optional[LunStorageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    storage_volume: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageVolume') }})
    wwid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wwid') }})
    
