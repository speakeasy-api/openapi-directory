import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subject as shared_subject
from ..shared import subjectaltnames as shared_subjectaltnames


@dataclass_json
@dataclasses.dataclass
class SubjectConfig:
    r"""SubjectConfig
    These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
    """
    
    common_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    subject: Optional[shared_subject.Subject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subject_alt_name: Optional[shared_subjectaltnames.SubjectAltNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAltName') }})
    
