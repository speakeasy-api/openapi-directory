import { SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";
/**
 * The relation between the group and the transitive member.
 */
export declare enum MemberRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Direct = "DIRECT",
    Indirect = "INDIRECT",
    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}
/**
 * Message representing a transitive membership of a group.
 */
export declare class MemberRelation extends SpeakeasyBase {
    /**
     * Resource name for this member.
     */
    member?: string;
    /**
     * Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.
     */
    preferredMemberKey?: EntityKey[];
    /**
     * The relation between the group and the transitive member.
     */
    relationType?: MemberRelationRelationTypeEnum;
    /**
     * The membership role details (i.e name of role and expiry time).
     */
    roles?: TransitiveMembershipRole[];
}
