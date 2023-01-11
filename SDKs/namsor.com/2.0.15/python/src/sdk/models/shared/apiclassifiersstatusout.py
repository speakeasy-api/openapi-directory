import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apiclassifierout as shared_apiclassifierout
from ..shared import softwareversionout as shared_softwareversionout


@dataclass_json
@dataclasses.dataclass
class APIClassifiersStatusOut:
    classifiers: Optional[list[shared_apiclassifierout.APIClassifierOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiers') }})
    software_version: Optional[shared_softwareversionout.SoftwareVersionOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareVersion') }})
    
