import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).
 */
export declare class Member extends SpeakeasyBase {
    /**
     * Defines mail delivery preferences of member. This is only supported by create/update/get.
     */
    deliverySettings?: string;
    /**
     * The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.
     */
    email?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.
     */
    id?: string;
    /**
     * The type of the API resource. For Members resources, the value is `admin#directory#member`.
     */
    kind?: string;
    /**
     * The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).
     */
    role?: string;
    /**
     * Status of member (Immutable)
     */
    status?: string;
    /**
     * The type of group member.
     */
    type?: string;
}
