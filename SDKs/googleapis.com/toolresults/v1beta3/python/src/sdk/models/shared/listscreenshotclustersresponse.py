import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import screenshotcluster as shared_screenshotcluster


@dataclass_json
@dataclasses.dataclass
class ListScreenshotClustersResponse:
    clusters: Optional[list[shared_screenshotcluster.ScreenshotCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    
