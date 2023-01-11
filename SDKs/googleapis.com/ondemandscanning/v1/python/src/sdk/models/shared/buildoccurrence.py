import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import intotoprovenance as shared_intotoprovenance
from ..shared import intotostatement as shared_intotostatement
from ..shared import buildprovenance as shared_buildprovenance


@dataclass_json
@dataclasses.dataclass
class BuildOccurrence:
    r"""BuildOccurrence
    Details of a build occurrence.
    """
    
    intoto_provenance: Optional[shared_intotoprovenance.InTotoProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intotoProvenance') }})
    intoto_statement: Optional[shared_intotostatement.InTotoStatement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intotoStatement') }})
    provenance: Optional[shared_buildprovenance.BuildProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    provenance_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenanceBytes') }})
    
