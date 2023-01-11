import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gettxresponse as shared_gettxresponse


@dataclass_json
@dataclasses.dataclass
class GetTxsResponse:
    r"""GetTxsResponse
    Object containing an array of transaction objects
    """
    
    pages_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesTotal') }})
    txs: Optional[list[shared_gettxresponse.GetTxResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txs') }})
    
