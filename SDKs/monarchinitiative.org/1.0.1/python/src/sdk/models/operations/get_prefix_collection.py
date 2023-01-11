import dataclasses



@dataclasses.dataclass
class GetPrefixCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
