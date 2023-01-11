import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationtransferparam as shared_applicationtransferparam


@dataclass_json
@dataclasses.dataclass
class ApplicationDataTransfer:
    r"""ApplicationDataTransfer
    Template to map fields of ApplicationDataTransfer resource.
    """
    
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    application_transfer_params: Optional[list[shared_applicationtransferparam.ApplicationTransferParam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationTransferParams') }})
    application_transfer_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationTransferStatus') }})
    
