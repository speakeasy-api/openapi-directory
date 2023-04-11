import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
/**
 * Associates `members` with a `role`.
 */
export declare class GoogleIamV1Binding extends SpeakeasyBase {
    /**
     * Represents an expression text. Example:
     *
     * @remarks
     *
     *     title: "User account presence"
     *     description: "Determines whether the request has a user account"
     *     expression: "size(request.user) > 0"
     */
    condition?: GoogleTypeExpr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     *
     * @remarks
     * `members` can have the following values:
     *
     * * `allUsers`: A special identifier that represents anyone who is
     *    on the internet; with or without a Google account.
     *
     * * `allAuthenticatedUsers`: A special identifier that represents anyone
     *    who is authenticated with a Google account or a service account.
     *
     * * `user:{emailid}`: An email address that represents a specific Google
     *    account. For example, `alice@example.com` .
     *
     *
     * * `serviceAccount:{emailid}`: An email address that represents a service
     *    account. For example, `my-other-app@appspot.gserviceaccount.com`.
     *
     * * `group:{emailid}`: An email address that represents a Google group.
     *    For example, `admins@example.com`.
     *
     * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
     *    identifier) representing a user that has been recently deleted. For
     *    example, `alice@example.com?uid=123456789012345678901`. If the user is
     *    recovered, this value reverts to `user:{emailid}` and the recovered user
     *    retains the role in the binding.
     *
     * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
     *    unique identifier) representing a service account that has been recently
     *    deleted. For example,
     *    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
     *    If the service account is undeleted, this value reverts to
     *    `serviceAccount:{emailid}` and the undeleted service account retains the
     *    role in the binding.
     *
     * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
     *    identifier) representing a Google group that has been recently
     *    deleted. For example, `admins@example.com?uid=123456789012345678901`. If
     *    the group is recovered, this value reverts to `group:{emailid}` and the
     *    recovered group retains the role in the binding.
     *
     *
     * * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     *
     *
     */
    members?: string[];
    /**
     * Role that is assigned to `members`.
     *
     * @remarks
     * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string;
}
