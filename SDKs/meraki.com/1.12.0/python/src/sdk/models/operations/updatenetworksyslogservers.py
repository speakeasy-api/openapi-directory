import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSyslogServersPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSyslogServersRequestBodyServers:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSyslogServersRequestBody:
    servers: list[UpdateNetworkSyslogServersRequestBodyServers] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    

@dataclasses.dataclass
class UpdateNetworkSyslogServersRequest:
    path_params: UpdateNetworkSyslogServersPathParams = dataclasses.field()
    request: UpdateNetworkSyslogServersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSyslogServersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_syslog_servers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
