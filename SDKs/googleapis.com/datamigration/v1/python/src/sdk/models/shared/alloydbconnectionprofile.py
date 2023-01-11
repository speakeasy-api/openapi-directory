import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alloydbsettings as shared_alloydbsettings
from ..shared import alloydbsettings as shared_alloydbsettings


@dataclass_json
@dataclasses.dataclass
class AlloyDbConnectionProfile:
    r"""AlloyDbConnectionProfile
    Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
    """
    
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    settings: Optional[shared_alloydbsettings.AlloyDbSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class AlloyDbConnectionProfileInput:
    r"""AlloyDbConnectionProfileInput
    Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
    """
    
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    settings: Optional[shared_alloydbsettings.AlloyDbSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
