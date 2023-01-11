import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkAlertsSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations:
    r"""UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations
    A hash of destinations for this specific alert
    """
    
    all_admins: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allAdmins') }})
    emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    http_server_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpServerIds') }})
    snmp: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkAlertsSettingsRequestBodyAlerts:
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    alert_destinations: Optional[UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertDestinations') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    filters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations:
    r"""UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations
    The network-wide destinations for all alerts on the network.
    """
    
    all_admins: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allAdmins') }})
    emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    http_server_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpServerIds') }})
    snmp: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkAlertsSettingsRequestBody:
    alerts: Optional[list[UpdateNetworkAlertsSettingsRequestBodyAlerts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    default_destinations: Optional[UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDestinations') }})
    

@dataclasses.dataclass
class UpdateNetworkAlertsSettingsRequest:
    path_params: UpdateNetworkAlertsSettingsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkAlertsSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkAlertsSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_alerts_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
