import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset
from ..shared import statementtemplate as shared_statementtemplate


@dataclass_json
@dataclasses.dataclass
class BulkCheckRequest:
    r"""BulkCheckRequest
    Message used to check for the existence of multiple digital asset links within a single RPC.
    """
    
    allow_google_internal_data_sources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowGoogleInternalDataSources') }})
    default_relation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultRelation') }})
    default_source: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSource') }})
    default_target: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTarget') }})
    skip_cache_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipCacheLookup') }})
    statements: Optional[list[shared_statementtemplate.StatementTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    
