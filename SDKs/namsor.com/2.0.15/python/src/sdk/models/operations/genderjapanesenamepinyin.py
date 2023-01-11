import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnamegenderedout as shared_firstlastnamegenderedout


@dataclasses.dataclass
class GenderJapaneseNamePinyinPathParams:
    japanese_given_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseGivenName', 'style': 'simple', 'explode': False }})
    japanese_surname: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseSurname', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenderJapaneseNamePinyinSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderJapaneseNamePinyinRequest:
    path_params: GenderJapaneseNamePinyinPathParams = dataclasses.field()
    security: GenderJapaneseNamePinyinSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GenderJapaneseNamePinyinResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_gendered_out: Optional[shared_firstlastnamegenderedout.FirstLastNameGenderedOut] = dataclasses.field(default=None)
    
