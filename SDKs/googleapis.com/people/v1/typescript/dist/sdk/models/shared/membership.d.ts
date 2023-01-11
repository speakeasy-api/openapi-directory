import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupMembership } from "./contactgroupmembership";
import { DomainMembership } from "./domainmembership";
import { FieldMetadata } from "./fieldmetadata";
import { ContactGroupMembershipInput } from "./contactgroupmembership";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export declare class Membership extends SpeakeasyBase {
    contactGroupMembership?: ContactGroupMembership;
    domainMembership?: DomainMembership;
    metadata?: FieldMetadata;
}
/**
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export declare class MembershipInput extends SpeakeasyBase {
    contactGroupMembership?: ContactGroupMembershipInput;
    domainMembership?: DomainMembership;
    metadata?: FieldMetadataInput;
}
