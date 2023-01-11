import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import namematchcandidatesout as shared_namematchcandidatesout


@dataclasses.dataclass
class JapaneseNameKanjiCandidates1PathParams:
    japanese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JapaneseNameKanjiCandidates1Security:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class JapaneseNameKanjiCandidates1Request:
    path_params: JapaneseNameKanjiCandidates1PathParams = dataclasses.field()
    security: JapaneseNameKanjiCandidates1Security = dataclasses.field()
    

@dataclasses.dataclass
class JapaneseNameKanjiCandidates1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    name_match_candidates_out: Optional[shared_namematchcandidatesout.NameMatchCandidatesOut] = dataclasses.field(default=None)
    
