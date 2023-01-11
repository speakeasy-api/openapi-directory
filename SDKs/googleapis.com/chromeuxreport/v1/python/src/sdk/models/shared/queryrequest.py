import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueryRequestFormFactorEnum(str, Enum):
    ALL_FORM_FACTORS = "ALL_FORM_FACTORS"
    PHONE = "PHONE"
    DESKTOP = "DESKTOP"
    TABLET = "TABLET"


@dataclass_json
@dataclasses.dataclass
class QueryRequest:
    r"""QueryRequest
    Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
    """
    
    effective_connection_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveConnectionType') }})
    form_factor: Optional[QueryRequestFormFactorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    metrics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
