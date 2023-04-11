import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user's permission level for the site.
 */
export declare enum WmxSitePermissionLevelEnum {
    SitePermissionLevelUnspecified = "SITE_PERMISSION_LEVEL_UNSPECIFIED",
    SiteOwner = "SITE_OWNER",
    SiteFullUser = "SITE_FULL_USER",
    SiteRestrictedUser = "SITE_RESTRICTED_USER",
    SiteUnverifiedUser = "SITE_UNVERIFIED_USER"
}
/**
 * Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
 */
export declare class WmxSite extends SpeakeasyBase {
    /**
     * The user's permission level for the site.
     */
    permissionLevel?: WmxSitePermissionLevelEnum;
    /**
     * The URL of the site.
     */
    siteUrl?: string;
}
