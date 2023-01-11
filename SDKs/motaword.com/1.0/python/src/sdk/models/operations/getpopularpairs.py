import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import popularlanguagepairs as shared_popularlanguagepairs


@dataclasses.dataclass
class GetPopularPairsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    popular_language_pairs: Optional[shared_popularlanguagepairs.PopularLanguagePairs] = dataclasses.field(default=None)
    
