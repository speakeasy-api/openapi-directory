import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publickeycertificate as shared_publickeycertificate


@dataclass_json
@dataclasses.dataclass
class RegistryCredential:
    r"""RegistryCredential
    A server-stored registry credential used to validate device credentials.
    """
    
    public_key_certificate: Optional[shared_publickeycertificate.PublicKeyCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyCertificate') }})
    
