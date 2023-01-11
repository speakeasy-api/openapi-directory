import dataclasses
from typing import Optional


@dataclasses.dataclass
class ImprovementProgramJSONResponse:
    id: Optional[str] = dataclasses.field(default=None)
    
