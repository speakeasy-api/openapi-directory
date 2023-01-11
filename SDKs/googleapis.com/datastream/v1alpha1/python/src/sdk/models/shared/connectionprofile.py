import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forwardsshtunnelconnectivity as shared_forwardsshtunnelconnectivity
from ..shared import gcsprofile as shared_gcsprofile
from ..shared import mysqlprofile as shared_mysqlprofile
from ..shared import oracleprofile as shared_oracleprofile
from ..shared import privateconnectivity as shared_privateconnectivity
from ..shared import mysqlprofile as shared_mysqlprofile


@dataclass_json
@dataclasses.dataclass
class ConnectionProfile:
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    forward_ssh_connectivity: Optional[shared_forwardsshtunnelconnectivity.ForwardSSHTunnelConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardSshConnectivity') }})
    gcs_profile: Optional[shared_gcsprofile.GcsProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsProfile') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql_profile: Optional[shared_mysqlprofile.MysqlProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlProfile') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no_connectivity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noConnectivity') }})
    oracle_profile: Optional[shared_oracleprofile.OracleProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleProfile') }})
    private_connectivity: Optional[shared_privateconnectivity.PrivateConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnectivity') }})
    static_service_ip_connectivity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticServiceIpConnectivity') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ConnectionProfileInput:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    forward_ssh_connectivity: Optional[shared_forwardsshtunnelconnectivity.ForwardSSHTunnelConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardSshConnectivity') }})
    gcs_profile: Optional[shared_gcsprofile.GcsProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsProfile') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql_profile: Optional[shared_mysqlprofile.MysqlProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlProfile') }})
    no_connectivity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noConnectivity') }})
    oracle_profile: Optional[shared_oracleprofile.OracleProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleProfile') }})
    private_connectivity: Optional[shared_privateconnectivity.PrivateConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnectivity') }})
    static_service_ip_connectivity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticServiceIpConnectivity') }})
    
