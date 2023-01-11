import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactgroupmembership as shared_contactgroupmembership
from ..shared import domainmembership as shared_domainmembership
from ..shared import fieldmetadata as shared_fieldmetadata
from ..shared import contactgroupmembership as shared_contactgroupmembership
from ..shared import fieldmetadata as shared_fieldmetadata


@dataclass_json
@dataclasses.dataclass
class Membership:
    r"""Membership
    A person's membership in a group. Only contact group memberships can be modified.
    """
    
    contact_group_membership: Optional[shared_contactgroupmembership.ContactGroupMembership] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupMembership') }})
    domain_membership: Optional[shared_domainmembership.DomainMembership] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMembership') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class MembershipInput:
    r"""MembershipInput
    A person's membership in a group. Only contact group memberships can be modified.
    """
    
    contact_group_membership: Optional[shared_contactgroupmembership.ContactGroupMembershipInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupMembership') }})
    domain_membership: Optional[shared_domainmembership.DomainMembership] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMembership') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
