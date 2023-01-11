import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transferparameters as shared_transferparameters


@dataclass_json
@dataclasses.dataclass
class RetrieveTransferParametersResponse:
    r"""RetrieveTransferParametersResponse
    Response for the `RetrieveTransferParameters` method.
    """
    
    transfer_parameters: Optional[shared_transferparameters.TransferParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferParameters') }})
    
