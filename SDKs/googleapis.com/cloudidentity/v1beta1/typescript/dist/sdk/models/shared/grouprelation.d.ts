import { SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";
/**
 * The relation between the member and the transitive group.
 */
export declare enum GroupRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Direct = "DIRECT",
    Indirect = "INDIRECT",
    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}
/**
 * Message representing a transitive group of a user or a group.
 */
export declare class GroupRelation extends SpeakeasyBase {
    /**
     * Display name for this group.
     */
    displayName?: string;
    /**
     * Resource name for this group.
     */
    group?: string;
    /**
     * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
     */
    groupKey?: EntityKey;
    /**
     * Labels for Group resource.
     */
    labels?: Record<string, string>;
    /**
     * The relation between the member and the transitive group.
     */
    relationType?: GroupRelationRelationTypeEnum;
    /**
     * Membership roles of the member for the group.
     */
    roles?: TransitiveMembershipRole[];
}
