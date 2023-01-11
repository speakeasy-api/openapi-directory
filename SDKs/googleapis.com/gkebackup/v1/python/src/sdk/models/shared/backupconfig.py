import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionkey as shared_encryptionkey
from ..shared import namespacednames as shared_namespacednames
from ..shared import namespaces as shared_namespaces


@dataclass_json
@dataclasses.dataclass
class BackupConfig:
    r"""BackupConfig
    BackupConfig defines the configuration of Backups created via this BackupPlan.
    """
    
    all_namespaces: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allNamespaces') }})
    encryption_key: Optional[shared_encryptionkey.EncryptionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    include_secrets: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSecrets') }})
    include_volume_data: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeVolumeData') }})
    selected_applications: Optional[shared_namespacednames.NamespacedNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedApplications') }})
    selected_namespaces: Optional[shared_namespaces.Namespaces] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNamespaces') }})
    
