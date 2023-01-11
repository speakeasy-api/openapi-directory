import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import spanscore as shared_spanscore
from ..shared import score as shared_score


@dataclass_json
@dataclasses.dataclass
class AttributeScores:
    span_scores: Optional[list[shared_spanscore.SpanScore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanScores') }})
    summary_score: Optional[shared_score.Score] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaryScore') }})
    
