import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sslcertdetail as shared_sslcertdetail
from ..shared import operation as shared_operation
from ..shared import sslcert as shared_sslcert


@dataclass_json
@dataclasses.dataclass
class SslCertsInsertResponse:
    r"""SslCertsInsertResponse
    SslCert insert response.
    """
    
    client_cert: Optional[shared_sslcertdetail.SslCertDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCert') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    operation: Optional[shared_operation.Operation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    server_ca_cert: Optional[shared_sslcert.SslCert] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCaCert') }})
    
