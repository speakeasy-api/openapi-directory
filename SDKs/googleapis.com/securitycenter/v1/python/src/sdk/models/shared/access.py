import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geolocation as shared_geolocation
from ..shared import serviceaccountdelegationinfo as shared_serviceaccountdelegationinfo


@dataclass_json
@dataclasses.dataclass
class Access:
    r"""Access
    Represents an access event.
    """
    
    caller_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerIp') }})
    caller_ip_geo: Optional[shared_geolocation.Geolocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerIpGeo') }})
    method_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    principal_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalEmail') }})
    principal_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalSubject') }})
    service_account_delegation_info: Optional[list[shared_serviceaccountdelegationinfo.ServiceAccountDelegationInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountDelegationInfo') }})
    service_account_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountKeyName') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    user_agent_family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgentFamily') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
