import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicauth as shared_basicauth
from ..shared import serviceaccount as shared_serviceaccount


@dataclass_json
@dataclasses.dataclass
class Credential:
    r"""Credential
    The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
    """
    
    basic_auth: Optional[shared_basicauth.BasicAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuth') }})
    service_account: Optional[shared_serviceaccount.ServiceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    use_project_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useProjectDefault') }})
    
