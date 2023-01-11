import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ThirdPartyJobInstructionThirdPartyJobInstructionEmployer:
    r"""ThirdPartyJobInstructionThirdPartyJobInstructionEmployer
    The third party job instructions' employer
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class ThirdPartyJobInstructionThirdPartyJobInstruction:
    client_id_unique_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientIdUniqueKey') }})
    client_secret_unique_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecretUniqueKey') }})
    employer: Optional[ThirdPartyJobInstructionThirdPartyJobInstructionEmployer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employer') }})
    holding_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instruction_type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionTypeName') }})
    pay_schedule_unique_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayScheduleUniqueKey') }})
    payment_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    remote_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteEndpoint') }})
    

@dataclass_json
@dataclasses.dataclass
class ThirdPartyJobInstruction:
    third_party_job_instruction: Optional[ThirdPartyJobInstructionThirdPartyJobInstruction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThirdPartyJobInstruction') }})
    
