import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subject as shared_subject
from ..shared import subjectaltnames as shared_subjectaltnames


@dataclass_json
@dataclasses.dataclass
class SubjectDescription:
    r"""SubjectDescription
    These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
    """
    
    common_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    hex_serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexSerialNumber') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    not_after_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notAfterTime') }})
    not_before_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notBeforeTime') }})
    subject: Optional[shared_subject.Subject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subject_alt_name: Optional[shared_subjectaltnames.SubjectAltNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAltName') }})
    
