import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProvidedSoftwareCatalog:
    r"""ProvidedSoftwareCatalog
    The currently provided software environment on the devices under test.
    """
    
    androidx_orchestrator_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidxOrchestratorVersion') }})
    orchestrator_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orchestratorVersion') }})
    
