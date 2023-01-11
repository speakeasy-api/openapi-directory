import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quizsettings as shared_quizsettings


@dataclass_json
@dataclasses.dataclass
class FormSettings:
    r"""FormSettings
    A form's settings.
    """
    
    quiz_settings: Optional[shared_quizsettings.QuizSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quizSettings') }})
    
