import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clouddatalineageintegration as shared_clouddatalineageintegration


@dataclass_json
@dataclasses.dataclass
class SoftwareConfig:
    r"""SoftwareConfig
    Specifies the selection and configuration of software inside the environment.
    """
    
    airflow_config_overrides: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airflowConfigOverrides') }})
    cloud_data_lineage_integration: Optional[shared_clouddatalineageintegration.CloudDataLineageIntegration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudDataLineageIntegration') }})
    env_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    image_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersion') }})
    pypi_packages: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pypiPackages') }})
    python_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonVersion') }})
    scheduler_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulerCount') }})
    
