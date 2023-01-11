import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness
    Indicates that the builder claims certain fields in this message to be complete.
    """
    
    environment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    materials: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    parameters: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
