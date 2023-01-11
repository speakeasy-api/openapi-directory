import dataclasses
from typing import Optional
from ..shared import sufficiencypostinput as shared_sufficiencypostinput
from ..shared import sufficiencyoutput as shared_sufficiencyoutput


@dataclasses.dataclass
class PostAnnotationScoreRequest:
    request: shared_sufficiencypostinput.SufficiencyPostInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAnnotationScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sufficiency_output: Optional[shared_sufficiencyoutput.SufficiencyOutput] = dataclasses.field(default=None)
    
