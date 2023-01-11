import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteInstallationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteInstallation200ApplicationJSONUsageCharge:
    r"""DeleteInstallation200ApplicationJSONUsageCharge
    （従量課金の場合）従量課金アンインストール情報
    """
    
    api_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_token') }})
    closing_on: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closing_on') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteInstallation200ApplicationJSON:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    application_charge_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge_source_id') }})
    recurring_application_charge_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurring_application_charge_id') }})
    uninstalled_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uninstalled_at') }})
    usage_charge: Optional[DeleteInstallation200ApplicationJSONUsageCharge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_charge') }})
    

@dataclasses.dataclass
class DeleteInstallationRequest:
    security: DeleteInstallationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_installation_200_application_json_object: Optional[DeleteInstallation200ApplicationJSON] = dataclasses.field(default=None)
    
