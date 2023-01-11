import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iosmodel as shared_iosmodel
from ..shared import iosruntimeconfiguration as shared_iosruntimeconfiguration
from ..shared import iosversion as shared_iosversion
from ..shared import xcodeversion as shared_xcodeversion


@dataclass_json
@dataclasses.dataclass
class IosDeviceCatalog:
    r"""IosDeviceCatalog
    The currently supported iOS devices.
    """
    
    models: Optional[list[shared_iosmodel.IosModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    runtime_configuration: Optional[shared_iosruntimeconfiguration.IosRuntimeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfiguration') }})
    versions: Optional[list[shared_iosversion.IosVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    xcode_versions: Optional[list[shared_xcodeversion.XcodeVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xcodeVersions') }})
    
