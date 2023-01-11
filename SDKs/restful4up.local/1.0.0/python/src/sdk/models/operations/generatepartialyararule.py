import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GeneratePartialYaraRuleRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class GeneratePartialYaraRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
