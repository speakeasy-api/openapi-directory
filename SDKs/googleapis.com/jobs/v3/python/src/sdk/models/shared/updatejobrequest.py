import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class UpdateJobRequest:
    r"""UpdateJobRequest
    Input only. Update job request.
    """
    
    job: Optional[shared_job.Job] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
