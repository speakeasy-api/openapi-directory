import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnameusraceethnicityout as shared_firstlastnameusraceethnicityout


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameUsRaceEthnicityOut:
    r"""BatchFirstLastNameUsRaceEthnicityOut
    Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
    """
    
    personal_names: Optional[list[shared_firstlastnameusraceethnicityout.FirstLastNameUsRaceEthnicityOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
