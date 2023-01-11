import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import twitter as shared_twitter


@dataclass_json
@dataclasses.dataclass
class Social:
    r"""Social
    Social networks data
    """
    
    twitter: Optional[shared_twitter.Twitter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter') }})
    
