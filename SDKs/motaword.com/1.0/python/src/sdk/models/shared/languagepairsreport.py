import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagingmeta as shared_pagingmeta


@dataclass_json
@dataclasses.dataclass
class LanguagePairsReportReportLanguagePair:
    source_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_language') }})
    target_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_language') }})
    

@dataclass_json
@dataclasses.dataclass
class LanguagePairsReportReport:
    language_pair: Optional[LanguagePairsReportReportLanguagePair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_pair') }})
    spending: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spending') }})
    word_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('word_count') }})
    

@dataclass_json
@dataclasses.dataclass
class LanguagePairsReport:
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    report: Optional[list[LanguagePairsReportReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    
