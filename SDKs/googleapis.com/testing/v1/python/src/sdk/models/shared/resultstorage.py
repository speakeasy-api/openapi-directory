import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudstorage as shared_googlecloudstorage
from ..shared import toolresultsexecution as shared_toolresultsexecution
from ..shared import toolresultshistory as shared_toolresultshistory


@dataclass_json
@dataclasses.dataclass
class ResultStorage:
    r"""ResultStorage
    Locations where the results of running the test are stored.
    """
    
    google_cloud_storage: Optional[shared_googlecloudstorage.GoogleCloudStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCloudStorage') }})
    results_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsUrl') }})
    tool_results_execution: Optional[shared_toolresultsexecution.ToolResultsExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolResultsExecution') }})
    tool_results_history: Optional[shared_toolresultshistory.ToolResultsHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolResultsHistory') }})
    
