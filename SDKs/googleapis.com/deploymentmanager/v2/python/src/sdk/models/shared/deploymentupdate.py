import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentupdatelabelentry as shared_deploymentupdatelabelentry


@dataclass_json
@dataclasses.dataclass
class DeploymentUpdate:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[list[shared_deploymentupdatelabelentry.DeploymentUpdateLabelEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    manifest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    
