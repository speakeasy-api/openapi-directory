import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import namematchcandidatesout as shared_namematchcandidatesout


@dataclasses.dataclass
class JapaneseNameLatinCandidatesPathParams:
    japanese_given_name_kanji: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseGivenNameKanji', 'style': 'simple', 'explode': False }})
    japanese_surname_kanji: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseSurnameKanji', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JapaneseNameLatinCandidatesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class JapaneseNameLatinCandidatesRequest:
    path_params: JapaneseNameLatinCandidatesPathParams = dataclasses.field()
    security: JapaneseNameLatinCandidatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class JapaneseNameLatinCandidatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    name_match_candidates_out: Optional[shared_namematchcandidatesout.NameMatchCandidatesOut] = dataclasses.field(default=None)
    
