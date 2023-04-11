import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read-only resource used to summarize a principal's effective roles.
 */
export declare class GoogleAnalyticsAdminV1alphaAuditUserLink extends SpeakeasyBase {
    /**
     * Roles directly assigned to this user for this entity. Format: predefinedRoles/viewer Excludes roles that are inherited from an account (if this is for a property), group, or organization admin role.
     */
    directRoles?: string[];
    /**
     * Union of all permissions a user has at this account or property (includes direct permissions, group-inherited permissions, etc.). Format: predefinedRoles/viewer
     */
    effectiveRoles?: string[];
    /**
     * Email address of the linked user
     */
    emailAddress?: string;
    /**
     * Example format: properties/1234/userLinks/5678
     */
    name?: string;
}
