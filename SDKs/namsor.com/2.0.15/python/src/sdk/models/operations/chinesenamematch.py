import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import namematchedout as shared_namematchedout


@dataclasses.dataclass
class ChineseNameMatchPathParams:
    chinese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChineseNameMatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ChineseNameMatchRequest:
    path_params: ChineseNameMatchPathParams = dataclasses.field()
    security: ChineseNameMatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ChineseNameMatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    name_matched_out: Optional[shared_namematchedout.NameMatchedOut] = dataclasses.field(default=None)
    
