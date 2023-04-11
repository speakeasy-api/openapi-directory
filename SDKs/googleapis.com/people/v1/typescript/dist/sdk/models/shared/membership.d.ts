import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupMembership, ContactGroupMembershipInput } from "./contactgroupmembership";
import { DomainMembership } from "./domainmembership";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's membership in a group. Only contact group memberships can be modified.
 */
export declare class Membership extends SpeakeasyBase {
    /**
     * A Google contact group membership.
     */
    contactGroupMembership?: ContactGroupMembership;
    /**
     * A Google Workspace Domain membership.
     */
    domainMembership?: DomainMembership;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
}
/**
 * A person's membership in a group. Only contact group memberships can be modified.
 */
export declare class MembershipInput extends SpeakeasyBase {
    /**
     * A Google contact group membership.
     */
    contactGroupMembership?: ContactGroupMembershipInput;
    /**
     * A Google Workspace Domain membership.
     */
    domainMembership?: DomainMembership;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
}
