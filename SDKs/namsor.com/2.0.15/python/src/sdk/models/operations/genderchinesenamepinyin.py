import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnamegenderedout as shared_firstlastnamegenderedout


@dataclasses.dataclass
class GenderChineseNamePinyinPathParams:
    chinese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenderChineseNamePinyinSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderChineseNamePinyinRequest:
    path_params: GenderChineseNamePinyinPathParams = dataclasses.field()
    security: GenderChineseNamePinyinSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GenderChineseNamePinyinResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_gendered_out: Optional[shared_firstlastnamegenderedout.FirstLastNameGenderedOut] = dataclasses.field(default=None)
    
