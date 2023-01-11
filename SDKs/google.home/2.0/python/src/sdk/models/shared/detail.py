import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iconlist as shared_iconlist
from ..shared import locale as shared_locale
from ..shared import timezone as shared_timezone


@dataclass_json
@dataclasses.dataclass
class Detail:
    icon_list: list[shared_iconlist.IconList] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon_list') }})
    locale: shared_locale.Locale = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    timezone: shared_timezone.Timezone = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
