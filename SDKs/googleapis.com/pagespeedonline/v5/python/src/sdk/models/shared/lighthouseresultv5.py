import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lighthouseauditresultv5 as shared_lighthouseauditresultv5
from ..shared import categories as shared_categories
from ..shared import categorygroupv5 as shared_categorygroupv5
from ..shared import configsettings as shared_configsettings
from ..shared import environment as shared_environment
from ..shared import i18n as shared_i18n
from ..shared import runtimeerror as shared_runtimeerror
from ..shared import stackpack as shared_stackpack
from ..shared import timing as shared_timing


@dataclass_json
@dataclasses.dataclass
class LighthouseResultV5:
    r"""LighthouseResultV5
    The Lighthouse result object.
    """
    
    audits: Optional[dict[str, shared_lighthouseauditresultv5.LighthouseAuditResultV5]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audits') }})
    categories: Optional[shared_categories.Categories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    category_groups: Optional[dict[str, shared_categorygroupv5.CategoryGroupV5]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryGroups') }})
    config_settings: Optional[shared_configsettings.ConfigSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSettings') }})
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    fetch_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchTime') }})
    final_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalUrl') }})
    i18n: Optional[shared_i18n.I18n] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i18n') }})
    lighthouse_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lighthouseVersion') }})
    requested_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedUrl') }})
    run_warnings: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runWarnings') }})
    runtime_error: Optional[shared_runtimeerror.RuntimeError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeError') }})
    stack_packs: Optional[list[shared_stackpack.StackPack]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackPacks') }})
    timing: Optional[shared_timing.Timing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    user_agent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    
