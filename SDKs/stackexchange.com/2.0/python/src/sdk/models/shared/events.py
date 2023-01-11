import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Events:
    creation_date: Optional[int] = dataclasses.field(default=None)
    event_type: Optional[str] = dataclasses.field(default=None)
    excerpt: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    the_id_of_the_object_answer_comment_question_or_user_the_event_describes: Optional[int] = dataclasses.field(default=None)
    
