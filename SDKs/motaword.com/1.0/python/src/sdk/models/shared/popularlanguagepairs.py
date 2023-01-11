import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagepair as shared_languagepair


@dataclass_json
@dataclasses.dataclass
class PopularLanguagePairs:
    pairs: Optional[list[shared_languagepair.LanguagePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pairs') }})
    
