import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BusinessChainSearchTerms:
    r"""BusinessChainSearchTerms
    Search terms for Business Chain targeting options. At least one of the field should be populated.
    """
    
    business_chain_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainQuery') }})
    region_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionQuery') }})
    
