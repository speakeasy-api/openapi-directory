import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CmHybridConfig:
    r"""CmHybridConfig
    Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
    """
    
    cm_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmAccountId') }})
    cm_floodlight_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmFloodlightConfigId') }})
    cm_floodlight_linking_authorized: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmFloodlightLinkingAuthorized') }})
    cm_syncable_site_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmSyncableSiteIds') }})
    dv360_to_cm_cost_reporting_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dv360ToCmCostReportingEnabled') }})
    dv360_to_cm_data_sharing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dv360ToCmDataSharingEnabled') }})
    
