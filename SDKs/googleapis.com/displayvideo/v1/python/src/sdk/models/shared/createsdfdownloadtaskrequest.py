import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import idfilter as shared_idfilter
from ..shared import inventorysourcefilter as shared_inventorysourcefilter
from ..shared import parententityfilter as shared_parententityfilter

class CreateSdfDownloadTaskRequestVersionEnum(str, Enum):
    SDF_VERSION_UNSPECIFIED = "SDF_VERSION_UNSPECIFIED"
    SDF_VERSION_3_1 = "SDF_VERSION_3_1"
    SDF_VERSION_4 = "SDF_VERSION_4"
    SDF_VERSION_4_1 = "SDF_VERSION_4_1"
    SDF_VERSION_4_2 = "SDF_VERSION_4_2"
    SDF_VERSION_5 = "SDF_VERSION_5"
    SDF_VERSION_5_1 = "SDF_VERSION_5_1"
    SDF_VERSION_5_2 = "SDF_VERSION_5_2"
    SDF_VERSION_5_3 = "SDF_VERSION_5_3"
    SDF_VERSION_5_4 = "SDF_VERSION_5_4"
    SDF_VERSION_5_5 = "SDF_VERSION_5_5"


@dataclass_json
@dataclasses.dataclass
class CreateSdfDownloadTaskRequest:
    r"""CreateSdfDownloadTaskRequest
    Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
    """
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    id_filter: Optional[shared_idfilter.IDFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idFilter') }})
    inventory_source_filter: Optional[shared_inventorysourcefilter.InventorySourceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceFilter') }})
    parent_entity_filter: Optional[shared_parententityfilter.ParentEntityFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentEntityFilter') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    version: Optional[CreateSdfDownloadTaskRequestVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
