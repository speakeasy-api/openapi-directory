import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import processsignature as shared_processsignature


@dataclass_json
@dataclasses.dataclass
class Indicator:
    r"""Indicator
    Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
    """
    
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    ip_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    signatures: Optional[list[shared_processsignature.ProcessSignature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatures') }})
    uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    
