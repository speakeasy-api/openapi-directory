import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schedulerresource as shared_schedulerresource
from ..shared import triggererresource as shared_triggererresource
from ..shared import webserverresource as shared_webserverresource
from ..shared import workerresource as shared_workerresource


@dataclass_json
@dataclasses.dataclass
class WorkloadsConfig:
    r"""WorkloadsConfig
    The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
    """
    
    scheduler: Optional[shared_schedulerresource.SchedulerResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduler') }})
    triggerer: Optional[shared_triggererresource.TriggererResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerer') }})
    web_server: Optional[shared_webserverresource.WebServerResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServer') }})
    worker: Optional[shared_workerresource.WorkerResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worker') }})
    
