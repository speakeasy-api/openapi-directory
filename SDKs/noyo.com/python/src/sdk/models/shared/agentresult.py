import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agencydetails as shared_agencydetails
from ..shared import splitcommissiondetails as shared_splitcommissiondetails
from ..shared import generalagencydetails as shared_generalagencydetails


@dataclass_json
@dataclasses.dataclass
class AgentResultAgentDetails:
    r"""AgentResultAgentDetails
    Details about the agent
    """
    
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    license_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_number') }})
    national_producer_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('national_producer_number') }})
    tax_id_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id_number') }})
    

@dataclass_json
@dataclasses.dataclass
class AgentResult:
    agency_details: shared_agencydetails.AgencyDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agency_details') }})
    agent_details: AgentResultAgentDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent_details') }})
    commission_details: list[shared_splitcommissiondetails.SplitCommissionDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission_details') }})
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    general_agency_details: shared_generalagencydetails.GeneralAgencyDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('general_agency_details') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    license_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_number') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    signature_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
