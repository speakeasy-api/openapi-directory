import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The extent to which calendar access is granted by this ACL rule.
 */
export declare class AclRuleScope extends SpeakeasyBase {
    /**
     * The type of the scope. Possible values are:
     *
     * @remarks
     * - "default" - The public scope. This is the default value.
     * - "user" - Limits the scope to a single user.
     * - "group" - Limits the scope to a group.
     * - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.
     */
    type?: string;
    /**
     * The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".
     */
    value?: string;
}
/**
 * Successful response
 */
export declare class AclRule extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Identifier of the Access Control List (ACL) rule. See Sharing calendars.
     */
    id?: string;
    /**
     * Type of the resource ("calendar#aclRule").
     */
    kind?: string;
    /**
     * The role assigned to the scope. Possible values are:
     *
     * @remarks
     * - "none" - Provides no access.
     * - "freeBusyReader" - Provides read access to free/busy information.
     * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
     * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
     * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
     */
    role?: string;
    /**
     * The extent to which calendar access is granted by this ACL rule.
     */
    scope?: AclRuleScope;
}
