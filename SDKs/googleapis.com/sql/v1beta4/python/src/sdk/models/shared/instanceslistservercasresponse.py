import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sslcert as shared_sslcert


@dataclass_json
@dataclasses.dataclass
class InstancesListServerCasResponse:
    r"""InstancesListServerCasResponse
    Instances ListServerCas response.
    """
    
    active_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeVersion') }})
    certs: Optional[list[shared_sslcert.SslCert]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certs') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
