import dataclasses



@dataclasses.dataclass
class DeleteAMediaItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
