import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AppEngine:
    r"""AppEngine
    App Engine service. Learn more at https://cloud.google.com/appengine.
    """
    
    module_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moduleId') }})
    
