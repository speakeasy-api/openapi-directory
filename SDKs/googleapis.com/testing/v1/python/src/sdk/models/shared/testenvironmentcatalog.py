import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androiddevicecatalog as shared_androiddevicecatalog
from ..shared import deviceipblockcatalog as shared_deviceipblockcatalog
from ..shared import iosdevicecatalog as shared_iosdevicecatalog
from ..shared import networkconfigurationcatalog as shared_networkconfigurationcatalog
from ..shared import providedsoftwarecatalog as shared_providedsoftwarecatalog


@dataclass_json
@dataclasses.dataclass
class TestEnvironmentCatalog:
    r"""TestEnvironmentCatalog
    A description of a test environment.
    """
    
    android_device_catalog: Optional[shared_androiddevicecatalog.AndroidDeviceCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDeviceCatalog') }})
    device_ip_block_catalog: Optional[shared_deviceipblockcatalog.DeviceIPBlockCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIpBlockCatalog') }})
    ios_device_catalog: Optional[shared_iosdevicecatalog.IosDeviceCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDeviceCatalog') }})
    network_configuration_catalog: Optional[shared_networkconfigurationcatalog.NetworkConfigurationCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfigurationCatalog') }})
    software_catalog: Optional[shared_providedsoftwarecatalog.ProvidedSoftwareCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareCatalog') }})
    
