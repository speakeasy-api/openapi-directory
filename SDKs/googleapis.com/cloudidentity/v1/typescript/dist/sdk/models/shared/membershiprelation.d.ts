import { SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { MembershipRole } from "./membershiprole";
/**
 * Message containing membership relation.
 */
export declare class MembershipRelation extends SpeakeasyBase {
    /**
     * An extended description to help users determine the purpose of a `Group`.
     */
    description?: string;
    /**
     * The display name of the `Group`.
     */
    displayName?: string;
    /**
     * The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.
     */
    group?: string;
    /**
     * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
     */
    groupKey?: EntityKey;
    /**
     * One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.
     */
    labels?: Record<string, string>;
    /**
     * The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    membership?: string;
    /**
     * The `MembershipRole`s that apply to the `Membership`.
     */
    roles?: MembershipRole[];
}
