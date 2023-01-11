import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalifecycledisabledpolicy as shared_googleappsdrivelabelsv2betalifecycledisabledpolicy


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
    Request to disable the Field.
    """
    
    disabled_policy: Optional[shared_googleappsdrivelabelsv2betalifecycledisabledpolicy.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
