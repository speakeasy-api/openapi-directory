import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matcheddevelopermetadata as shared_matcheddevelopermetadata


@dataclass_json
@dataclasses.dataclass
class SearchDeveloperMetadataResponse:
    r"""SearchDeveloperMetadataResponse
    A reply to a developer metadata search request.
    """
    
    matched_developer_metadata: Optional[list[shared_matcheddevelopermetadata.MatchedDeveloperMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedDeveloperMetadata') }})
    
