import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locale as shared_locale
from ..shared import orientation as shared_orientation


@dataclass_json
@dataclasses.dataclass
class IosRuntimeConfiguration:
    r"""IosRuntimeConfiguration
    iOS configuration that can be selected at the time a test is run.
    """
    
    locales: Optional[list[shared_locale.Locale]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    orientations: Optional[list[shared_orientation.Orientation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientations') }})
    
