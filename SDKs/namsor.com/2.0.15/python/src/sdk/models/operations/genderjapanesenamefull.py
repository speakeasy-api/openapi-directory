import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import personalnamegenderedout as shared_personalnamegenderedout


@dataclasses.dataclass
class GenderJapaneseNameFullPathParams:
    japanese_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenderJapaneseNameFullSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderJapaneseNameFullRequest:
    path_params: GenderJapaneseNameFullPathParams = dataclasses.field()
    security: GenderJapaneseNameFullSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GenderJapaneseNameFullResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    personal_name_gendered_out: Optional[shared_personalnamegenderedout.PersonalNameGenderedOut] = dataclasses.field(default=None)
    
