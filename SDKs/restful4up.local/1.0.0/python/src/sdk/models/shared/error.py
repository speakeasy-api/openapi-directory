import dataclasses



@dataclasses.dataclass
class Error:
    message: str = dataclasses.field()
    status: int = dataclasses.field()
    
