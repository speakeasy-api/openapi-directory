import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CostMatrixDataInfo:
    r"""CostMatrixDataInfo
    Additional information for your request
    """
    
    copyrights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    took: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('took') }})
    

@dataclass_json
@dataclasses.dataclass
class CostMatrixData:
    r"""CostMatrixData
    JSON data of matrix response
    """
    
    distances: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distances') }})
    info: Optional[CostMatrixDataInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    times: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times') }})
    
class CostMatrixTypeEnum(str, Enum):
    DEFAULT = "default"
    GOOGLE = "google"


@dataclass_json
@dataclasses.dataclass
class CostMatrix:
    data: Optional[CostMatrixData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    location_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_ids') }})
    profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    type: Optional[CostMatrixTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
