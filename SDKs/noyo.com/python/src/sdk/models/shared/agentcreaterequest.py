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
class AgentCreateRequestAgentDetails:
    r"""AgentCreateRequestAgentDetails
    Details about the agent
    """
    
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    license_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_number') }})
    national_producer_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('national_producer_number') }})
    tax_id_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id_number') }})
    

@dataclass_json
@dataclasses.dataclass
class AgentCreateRequest:
    agency_details: Optional[shared_agencydetails.AgencyDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agency_details') }})
    agent_details: Optional[AgentCreateRequestAgentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent_details') }})
    commission_details: Optional[list[shared_splitcommissiondetails.SplitCommissionDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission_details') }})
    general_agency_details: Optional[shared_generalagencydetails.GeneralAgencyDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general_agency_details') }})
    license_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_number') }})
    signature_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
