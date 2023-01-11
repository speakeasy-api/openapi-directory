import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import temporalasset as shared_temporalasset


@dataclass_json
@dataclasses.dataclass
class BatchGetAssetsHistoryResponse:
    r"""BatchGetAssetsHistoryResponse
    Batch get assets history response.
    """
    
    assets: Optional[list[shared_temporalasset.TemporalAsset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    
