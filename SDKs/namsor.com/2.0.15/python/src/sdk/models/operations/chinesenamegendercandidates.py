import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import namematchcandidatesout as shared_namematchcandidatesout


@dataclasses.dataclass
class ChineseNameGenderCandidatesPathParams:
    chinese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    known_gender: str = dataclasses.field(metadata={'path_param': { 'field_name': 'knownGender', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChineseNameGenderCandidatesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ChineseNameGenderCandidatesRequest:
    path_params: ChineseNameGenderCandidatesPathParams = dataclasses.field()
    security: ChineseNameGenderCandidatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ChineseNameGenderCandidatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    name_match_candidates_out: Optional[shared_namematchcandidatesout.NameMatchCandidatesOut] = dataclasses.field(default=None)
    
