import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GcipSettings:
    r"""GcipSettings
    Allows customers to configure tenant_id for GCIP instance per-app.
    """
    
    login_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginPageUri') }})
    tenant_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantIds') }})
    
