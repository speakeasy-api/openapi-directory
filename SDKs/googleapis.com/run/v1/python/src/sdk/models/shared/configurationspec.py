import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisiontemplate as shared_revisiontemplate


@dataclass_json
@dataclasses.dataclass
class ConfigurationSpec:
    r"""ConfigurationSpec
    ConfigurationSpec holds the desired state of the Configuration (from the client).
    """
    
    template: Optional[shared_revisiontemplate.RevisionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
