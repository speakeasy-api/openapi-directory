import dataclasses
from typing import Optional
from ..shared import compareinput as shared_compareinput
from ..shared import simresult as shared_simresult


@dataclasses.dataclass
class PostSimCompareRequest:
    request: shared_compareinput.CompareInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSimCompareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sim_result: Optional[shared_simresult.SimResult] = dataclasses.field(default=None)
    
