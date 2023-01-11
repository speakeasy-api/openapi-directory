import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1column as shared_googlecloudchannelv1column


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Report:
    r"""GoogleCloudChannelV1Report
    The ID and description of a report that was used to generate report data. For example, \"GCP Daily Spend\", \"Google Workspace License Activity\", etc.
    """
    
    columns: Optional[list[shared_googlecloudchannelv1column.GoogleCloudChannelV1Column]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
