import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidmodel as shared_androidmodel
from ..shared import androidruntimeconfiguration as shared_androidruntimeconfiguration
from ..shared import androidversion as shared_androidversion


@dataclass_json
@dataclasses.dataclass
class AndroidDeviceCatalog:
    r"""AndroidDeviceCatalog
    The currently supported Android devices.
    """
    
    models: Optional[list[shared_androidmodel.AndroidModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    runtime_configuration: Optional[shared_androidruntimeconfiguration.AndroidRuntimeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfiguration') }})
    versions: Optional[list[shared_androidversion.AndroidVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
