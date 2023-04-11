import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource message representing a user's permissions on an Account or Property resource.
 */
export declare class GoogleAnalyticsAdminV1alphaUserLinkInput extends SpeakeasyBase {
    /**
     * Roles directly assigned to this user for this account or property. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data Excludes roles that are inherited from a higher-level entity, group, or organization admin role. A UserLink that is updated to have an empty list of direct_roles will be deleted.
     */
    directRoles?: string[];
    /**
     * Immutable. Email address of the user to link
     */
    emailAddress?: string;
}
/**
 * A resource message representing a user's permissions on an Account or Property resource.
 */
export declare class GoogleAnalyticsAdminV1alphaUserLink extends SpeakeasyBase {
    /**
     * Roles directly assigned to this user for this account or property. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data Excludes roles that are inherited from a higher-level entity, group, or organization admin role. A UserLink that is updated to have an empty list of direct_roles will be deleted.
     */
    directRoles?: string[];
    /**
     * Immutable. Email address of the user to link
     */
    emailAddress?: string;
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string;
}
