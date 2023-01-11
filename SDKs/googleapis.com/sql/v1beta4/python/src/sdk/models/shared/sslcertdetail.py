import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sslcert as shared_sslcert


@dataclass_json
@dataclasses.dataclass
class SslCertDetail:
    r"""SslCertDetail
    SslCertDetail.
    """
    
    cert_info: Optional[shared_sslcert.SslCert] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certInfo') }})
    cert_private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certPrivateKey') }})
    
