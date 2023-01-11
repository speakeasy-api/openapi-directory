import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1reportvalue as shared_googlecloudchannelv1reportvalue


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Row:
    r"""GoogleCloudChannelV1Row
    A row of report values.
    """
    
    values: Optional[list[shared_googlecloudchannelv1reportvalue.GoogleCloudChannelV1ReportValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
