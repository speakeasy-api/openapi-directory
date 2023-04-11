import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. State of a site.
 */
export declare enum SiteStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    RequiresReview = "REQUIRES_REVIEW",
    GettingReady = "GETTING_READY",
    Ready = "READY",
    NeedsAttention = "NEEDS_ATTENTION"
}
/**
 * Representation of a Site.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * Whether auto ads is turned on for the site.
     */
    autoAdsEnabled?: boolean;
    /**
     * Domain (or subdomain) of the site, e.g. "example.com" or "www.example.com". This is used in the `OWNED_SITE_DOMAIN_NAME` reporting dimension.
     */
    domain?: string;
    /**
     * Output only. Resource name of a site. Format: accounts/{account}/sites/{site}
     */
    name?: string;
    /**
     * Output only. Unique ID of the site as used in the `OWNED_SITE_ID` reporting dimension.
     */
    reportingDimensionId?: string;
    /**
     * Output only. State of a site.
     */
    state?: SiteStateEnum;
}
