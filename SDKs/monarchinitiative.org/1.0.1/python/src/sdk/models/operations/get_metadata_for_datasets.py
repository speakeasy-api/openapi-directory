import dataclasses



@dataclasses.dataclass
class GetMetadataForDatasetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
