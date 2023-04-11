import { SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { MembershipRole, MembershipRoleInput } from "./membershiprole";
/**
 * Output only. Delivery setting associated with the membership.
 */
export declare enum MembershipDeliverySettingEnum {
    DeliverySettingUnspecified = "DELIVERY_SETTING_UNSPECIFIED",
    AllMail = "ALL_MAIL",
    Digest = "DIGEST",
    Daily = "DAILY",
    None = "NONE",
    Disabled = "DISABLED"
}
/**
 * Output only. The type of the membership.
 */
export declare enum MembershipTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    User = "USER",
    ServiceAccount = "SERVICE_ACCOUNT",
    Group = "GROUP",
    SharedDrive = "SHARED_DRIVE",
    Other = "OTHER"
}
/**
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
 */
export declare class Membership extends SpeakeasyBase {
    /**
     * Output only. The time when the `Membership` was created.
     */
    createTime?: string;
    /**
     * Output only. Delivery setting associated with the membership.
     */
    deliverySetting?: MembershipDeliverySettingEnum;
    /**
     * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
     */
    memberKey?: EntityKey;
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    name?: string;
    /**
     * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
     */
    preferredMemberKey?: EntityKey;
    /**
     * The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
     */
    roles?: MembershipRole[];
    /**
     * Output only. The type of the membership.
     */
    type?: MembershipTypeEnum;
    /**
     * Output only. The time when the `Membership` was last updated.
     */
    updateTime?: string;
}
/**
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
 */
export declare class MembershipInput extends SpeakeasyBase {
    /**
     * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
     */
    memberKey?: EntityKey;
    /**
     * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
     */
    preferredMemberKey?: EntityKey;
    /**
     * The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
     */
    roles?: MembershipRoleInput[];
}
