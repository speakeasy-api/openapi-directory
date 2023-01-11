import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadataexport as shared_metadataexport
from ..shared import restore as shared_restore


@dataclass_json
@dataclasses.dataclass
class MetadataManagementActivity:
    r"""MetadataManagementActivity
    The metadata management activities of the metastore service.
    """
    
    metadata_exports: Optional[list[shared_metadataexport.MetadataExport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataExports') }})
    restores: Optional[list[shared_restore.Restore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restores') }})
    
