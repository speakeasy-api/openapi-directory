import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integrationfields as shared_integrationfields


@dataclass_json
@dataclasses.dataclass
class Integrations:
    r"""Integrations
    Available and installed integrations
    """
    
    available: Optional[shared_integrationfields.IntegrationFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    installed: Optional[shared_integrationfields.IntegrationFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed') }})
    
