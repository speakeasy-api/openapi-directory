import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadataimport as shared_metadataimport


@dataclass_json
@dataclasses.dataclass
class ListMetadataImportsResponse:
    r"""ListMetadataImportsResponse
    Response message for DataprocMetastore.ListMetadataImports.
    """
    
    metadata_imports: Optional[list[shared_metadataimport.MetadataImport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataImports') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
