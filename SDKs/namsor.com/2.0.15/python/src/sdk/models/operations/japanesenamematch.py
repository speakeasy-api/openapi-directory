import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import namematchedout as shared_namematchedout


@dataclasses.dataclass
class JapaneseNameMatchPathParams:
    japanese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JapaneseNameMatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class JapaneseNameMatchRequest:
    path_params: JapaneseNameMatchPathParams = dataclasses.field()
    security: JapaneseNameMatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class JapaneseNameMatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    name_matched_out: Optional[shared_namematchedout.NameMatchedOut] = dataclasses.field(default=None)
    
