import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sslcert as shared_sslcert


@dataclass_json
@dataclasses.dataclass
class SslCertsListResponse:
    r"""SslCertsListResponse
    SslCerts list response.
    """
    
    items: Optional[list[shared_sslcert.SslCert]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
