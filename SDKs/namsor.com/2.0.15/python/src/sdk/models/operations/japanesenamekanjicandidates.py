import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import namematchcandidatesout as shared_namematchcandidatesout


@dataclasses.dataclass
class JapaneseNameKanjiCandidatesPathParams:
    japanese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    known_gender: str = dataclasses.field(metadata={'path_param': { 'field_name': 'knownGender', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JapaneseNameKanjiCandidatesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class JapaneseNameKanjiCandidatesRequest:
    path_params: JapaneseNameKanjiCandidatesPathParams = dataclasses.field()
    security: JapaneseNameKanjiCandidatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class JapaneseNameKanjiCandidatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    name_match_candidates_out: Optional[shared_namematchcandidatesout.NameMatchCandidatesOut] = dataclasses.field(default=None)
    
