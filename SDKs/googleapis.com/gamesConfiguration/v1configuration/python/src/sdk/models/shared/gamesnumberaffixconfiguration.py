import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstringbundle as shared_localizedstringbundle


@dataclass_json
@dataclasses.dataclass
class GamesNumberAffixConfiguration:
    r"""GamesNumberAffixConfiguration
    A number affix resource.
    """
    
    few: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('few') }})
    many: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('many') }})
    one: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('one') }})
    other: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other') }})
    two: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('two') }})
    zero: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zero') }})
    
