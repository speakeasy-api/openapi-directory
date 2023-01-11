import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebasefcmdatav1beta1data as shared_googlefirebasefcmdatav1beta1data
from ..shared import googletypedate as shared_googletypedate


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData:
    r"""GoogleFirebaseFcmDataV1beta1AndroidDeliveryData
    Message delivery data for a given date, app, and analytics label combination.
    """
    
    analytics_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsLabel') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    data: Optional[shared_googlefirebasefcmdatav1beta1data.GoogleFirebaseFcmDataV1beta1Data] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    date_: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    
