import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicysimulatorv1accesstuple as shared_googlecloudpolicysimulatorv1accesstuple
from ..shared import googlecloudpolicysimulatorv1replaydiff as shared_googlecloudpolicysimulatorv1replaydiff
from ..shared import googlerpcstatus as shared_googlerpcstatus
from ..shared import googletypedate as shared_googletypedate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1ReplayResult:
    r"""GoogleCloudPolicysimulatorV1ReplayResult
    The result of replaying a single access tuple against a simulated state.
    """
    
    access_tuple: Optional[shared_googlecloudpolicysimulatorv1accesstuple.GoogleCloudPolicysimulatorV1AccessTuple] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTuple') }})
    diff: Optional[shared_googlecloudpolicysimulatorv1replaydiff.GoogleCloudPolicysimulatorV1ReplayDiff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff') }})
    error: Optional[shared_googlerpcstatus.GoogleRPCStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    last_seen_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeenDate') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
