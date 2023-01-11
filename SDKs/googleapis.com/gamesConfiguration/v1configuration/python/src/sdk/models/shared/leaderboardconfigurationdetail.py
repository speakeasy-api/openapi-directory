import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstringbundle as shared_localizedstringbundle
from ..shared import gamesnumberformatconfiguration as shared_gamesnumberformatconfiguration


@dataclass_json
@dataclasses.dataclass
class LeaderboardConfigurationDetail:
    r"""LeaderboardConfigurationDetail
    A leaderboard configuration detail.
    """
    
    icon_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[shared_localizedstringbundle.LocalizedStringBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    score_format: Optional[shared_gamesnumberformatconfiguration.GamesNumberFormatConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreFormat') }})
    sort_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortRank') }})
    
