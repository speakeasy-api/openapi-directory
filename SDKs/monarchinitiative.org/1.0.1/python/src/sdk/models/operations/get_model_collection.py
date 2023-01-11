import dataclasses



@dataclasses.dataclass
class GetModelCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
