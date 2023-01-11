import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authority as shared_authority
from ..shared import membershipendpoint as shared_membershipendpoint
from ..shared import authority as shared_authority
from ..shared import membershipendpoint as shared_membershipendpoint
from ..shared import membershipstate as shared_membershipstate


@dataclass_json
@dataclasses.dataclass
class MembershipInput:
    r"""MembershipInput
    Membership contains information about a member cluster.
    """
    
    authority: Optional[shared_authority.AuthorityInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authority') }})
    endpoint: Optional[shared_membershipendpoint.MembershipEndpointInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclasses.dataclass
class Membership:
    r"""Membership
    Membership contains information about a member cluster.
    """
    
    authority: Optional[shared_authority.Authority] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authority') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    endpoint: Optional[shared_membershipendpoint.MembershipEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_connection_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastConnectionTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[shared_membershipstate.MembershipState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unique_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueId') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
