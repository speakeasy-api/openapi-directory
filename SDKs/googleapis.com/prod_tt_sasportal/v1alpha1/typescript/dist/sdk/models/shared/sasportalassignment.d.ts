import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Associates `members` with a `role`.
 */
export declare class SasPortalAssignment extends SpeakeasyBase {
    /**
     * The identities the role is assigned to. It can have the following values: * `{user_email}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email}`: An email address that represents a Google group. For example, `viewers@gmail.com`.
     */
    members?: string[];
    /**
     * Required. Role that is assigned to `members`.
     */
    role?: string;
}
