import dataclasses
from ..shared import createdistributionlinks as shared_createdistributionlinks


@dataclasses.dataclass
class GenerateDistributionLinksRequest:
    request: shared_createdistributionlinks.CreateDistributionLinks = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenerateDistributionLinksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
