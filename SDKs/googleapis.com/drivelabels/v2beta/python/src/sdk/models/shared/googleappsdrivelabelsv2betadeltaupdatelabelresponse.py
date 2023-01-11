import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse as shared_googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse
from ..shared import googleappsdrivelabelsv2betalabel as shared_googleappsdrivelabelsv2betalabel


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
    Response for Label update.
    """
    
    responses: Optional[list[shared_googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    updated_label: Optional[shared_googleappsdrivelabelsv2betalabel.GoogleAppsDriveLabelsV2betaLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedLabel') }})
    
