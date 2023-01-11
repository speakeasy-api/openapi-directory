import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationtransferparam as shared_applicationtransferparam


@dataclass_json
@dataclasses.dataclass
class Application:
    r"""Application
    Application resources represent applications installed on the domain that support transferring ownership of user data.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    transfer_params: Optional[list[shared_applicationtransferparam.ApplicationTransferParam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferParams') }})
    
