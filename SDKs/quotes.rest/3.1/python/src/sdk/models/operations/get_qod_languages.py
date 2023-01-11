import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQodLanguagesSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQodLanguagesRequest:
    security: GetQodLanguagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQodLanguagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
