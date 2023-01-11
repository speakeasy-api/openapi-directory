import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SignalEvaluateRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SignalEvaluateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    signal_evaluate_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
