import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dsapublickeyinfo as shared_dsapublickeyinfo
from ..shared import rsapublickeyinfo as shared_rsapublickeyinfo


@dataclass_json
@dataclasses.dataclass
class IdpCredential:
    r"""IdpCredential
    Credential for verifying signatures produced by the Identity Provider.
    """
    
    dsa_key_info: Optional[shared_dsapublickeyinfo.DsaPublicKeyInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsaKeyInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rsa_key_info: Optional[shared_rsapublickeyinfo.RsaPublicKeyInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsaKeyInfo') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
