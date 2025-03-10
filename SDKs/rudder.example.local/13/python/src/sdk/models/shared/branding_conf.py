import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import logo as shared_logo


@dataclass_json
@dataclasses.dataclass
class BrandingConf:
    bar_color: shared_color.Color = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('barColor') }})
    display_bar: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayBar') }})
    display_bar_login: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayBarLogin') }})
    display_label: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLabel') }})
    display_motd: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMotd') }})
    label_color: shared_color.Color = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelColor') }})
    label_text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelText') }})
    motd: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('motd') }})
    small_logo: shared_logo.Logo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallLogo') }})
    wide_logo: shared_logo.Logo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wideLogo') }})
    
