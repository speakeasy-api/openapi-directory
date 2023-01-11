import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchJobInstructionBatchJobInstructionDelete:
    r"""BatchJobInstructionBatchJobInstructionDelete
    The batch job instructions' instructions
    """
    
    delete: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DELETE') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchJobInstructionBatchJobInstruction:
    holding_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instructions: Optional[BatchJobInstructionBatchJobInstructionDelete] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instructions') }})
    validate_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidateOnly') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchJobInstruction:
    batch_job_instruction: Optional[BatchJobInstructionBatchJobInstruction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchJobInstruction') }})
    
