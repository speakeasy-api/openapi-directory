import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chain as shared_chain


@dataclass_json
@dataclasses.dataclass
class SearchChainsResponse:
    r"""SearchChainsResponse
    Response message for Locations.SearchChains.
    """
    
    chains: Optional[list[shared_chain.Chain]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chains') }})
    
