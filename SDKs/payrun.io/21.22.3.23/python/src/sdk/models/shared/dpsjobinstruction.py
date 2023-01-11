import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DpsJobInstructionDpsJobInstructionEmployer:
    r"""DpsJobInstructionDpsJobInstructionEmployer
    The dps job instructions' employer
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class DpsJobInstructionDpsJobInstructionType:
    r"""DpsJobInstructionDpsJobInstructionType
    The dps job instructions' message types
    """
    
    type: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class DpsJobInstructionDpsJobInstructionMessage:
    r"""DpsJobInstructionDpsJobInstructionMessage
    The dps job instructions' messages to process
    """
    
    message: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclasses.dataclass
class DpsJobInstructionDpsJobInstruction:
    apply: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Apply') }})
    employer: Optional[DpsJobInstructionDpsJobInstructionEmployer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employer') }})
    from_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    holding_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_types: Optional[DpsJobInstructionDpsJobInstructionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageTypes') }})
    messages_to_process: Optional[DpsJobInstructionDpsJobInstructionMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessagesToProcess') }})
    retrieve: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Retrieve') }})
    

@dataclass_json
@dataclasses.dataclass
class DpsJobInstruction:
    dps_job_instruction: Optional[DpsJobInstructionDpsJobInstruction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DpsJobInstruction') }})
    
