import dataclasses



@dataclasses.dataclass
class LogsActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
