import dataclasses
from typing import Optional


@dataclasses.dataclass
class TopTagObjects:
    answer_count: Optional[int] = dataclasses.field(default=None)
    answer_score: Optional[int] = dataclasses.field(default=None)
    question_count: Optional[int] = dataclasses.field(default=None)
    question_score: Optional[int] = dataclasses.field(default=None)
    tag_name: Optional[str] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    
