import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InstitutionalIdentification2:
    r"""InstitutionalIdentification2
    Institiutional identification of a bank (Clearing System Member ID)
    adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
    
    """
    
    clearing_system_id_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearingSystemIdCode') }})
    clearing_system_member_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearingSystemMemberId') }})
    
