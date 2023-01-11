import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Certificate:
    r"""Certificate
    A SSL/TLS X509 certificate
    """
    
    auto_renew: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenew') }})
    ca: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ca') }})
    ca_ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caRef') }})
    chain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chain') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    private_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    self_signed: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfSigned') }})
    subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    valid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
