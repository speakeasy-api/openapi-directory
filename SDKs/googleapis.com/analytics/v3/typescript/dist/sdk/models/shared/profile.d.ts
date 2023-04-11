import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Child link for this view (profile). Points to the list of goals for this view (profile).
 */
export declare class ProfileChildLink extends SpeakeasyBase {
    /**
     * Link to the list of goals for this view (profile).
     */
    href?: string;
    /**
     * Value is "analytics#goals".
     */
    type?: string;
}
/**
 * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
 */
export declare class ProfileParentLink extends SpeakeasyBase {
    /**
     * Link to the web property to which this view (profile) belongs.
     */
    href?: string;
    /**
     * Value is "analytics#webproperty".
     */
    type?: string;
}
/**
 * Permissions the user has for this view (profile).
 */
export declare class ProfilePermissions extends SpeakeasyBase {
    /**
     * All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property.
     */
    effective?: string[];
}
/**
 * JSON template for an Analytics view (profile).
 */
export declare class Profile extends SpeakeasyBase {
    /**
     * Account ID to which this view (profile) belongs.
     */
    accountId?: string;
    /**
     * Indicates whether bot filtering is enabled for this view (profile).
     */
    botFilteringEnabled?: boolean;
    /**
     * Child link for this view (profile). Points to the list of goals for this view (profile).
     */
    childLink?: ProfileChildLink;
    /**
     * Time this view (profile) was created.
     */
    created?: Date;
    /**
     * The currency type associated with this view (profile), defaults to USD. The supported values are:
     *
     * @remarks
     * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
     */
    currency?: string;
    /**
     * Default page for this view (profile).
     */
    defaultPage?: string;
    /**
     * Indicates whether ecommerce tracking is enabled for this view (profile).
     */
    eCommerceTracking?: boolean;
    /**
     * Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.
     */
    enhancedECommerceTracking?: boolean;
    /**
     * The query parameters that are excluded from this view (profile).
     */
    excludeQueryParameters?: string;
    /**
     * View (Profile) ID.
     */
    id?: string;
    /**
     * Internal ID for the web property to which this view (profile) belongs.
     */
    internalWebPropertyId?: string;
    /**
     * Resource type for Analytics view (profile).
     */
    kind?: string;
    /**
     * Name of this view (profile).
     */
    name?: string;
    /**
     * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
     */
    parentLink?: ProfileParentLink;
    /**
     * Permissions the user has for this view (profile).
     */
    permissions?: ProfilePermissions;
    /**
     * Link for this view (profile).
     */
    selfLink?: string;
    /**
     * Site search category parameters for this view (profile).
     */
    siteSearchCategoryParameters?: string;
    /**
     * The site search query parameters for this view (profile).
     */
    siteSearchQueryParameters?: string;
    /**
     * Indicates whether this view (profile) is starred or not.
     */
    starred?: boolean;
    /**
     * Whether or not Analytics will strip search category parameters from the URLs in your reports.
     */
    stripSiteSearchCategoryParameters?: boolean;
    /**
     * Whether or not Analytics will strip search query parameters from the URLs in your reports.
     */
    stripSiteSearchQueryParameters?: boolean;
    /**
     * Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
     */
    timezone?: string;
    /**
     * View (Profile) type. Supported types: WEB or APP.
     */
    type?: string;
    /**
     * Time this view (profile) was last modified.
     */
    updated?: Date;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
     */
    webPropertyId?: string;
    /**
     * Website URL for this view (profile).
     */
    websiteUrl?: string;
}
/**
 * JSON template for an Analytics view (profile).
 */
export declare class ProfileInput extends SpeakeasyBase {
    /**
     * Account ID to which this view (profile) belongs.
     */
    accountId?: string;
    /**
     * Indicates whether bot filtering is enabled for this view (profile).
     */
    botFilteringEnabled?: boolean;
    /**
     * Child link for this view (profile). Points to the list of goals for this view (profile).
     */
    childLink?: ProfileChildLink;
    /**
     * The currency type associated with this view (profile), defaults to USD. The supported values are:
     *
     * @remarks
     * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
     */
    currency?: string;
    /**
     * Default page for this view (profile).
     */
    defaultPage?: string;
    /**
     * Indicates whether ecommerce tracking is enabled for this view (profile).
     */
    eCommerceTracking?: boolean;
    /**
     * Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.
     */
    enhancedECommerceTracking?: boolean;
    /**
     * The query parameters that are excluded from this view (profile).
     */
    excludeQueryParameters?: string;
    /**
     * View (Profile) ID.
     */
    id?: string;
    /**
     * Name of this view (profile).
     */
    name?: string;
    /**
     * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
     */
    parentLink?: ProfileParentLink;
    /**
     * Site search category parameters for this view (profile).
     */
    siteSearchCategoryParameters?: string;
    /**
     * The site search query parameters for this view (profile).
     */
    siteSearchQueryParameters?: string;
    /**
     * Indicates whether this view (profile) is starred or not.
     */
    starred?: boolean;
    /**
     * Whether or not Analytics will strip search category parameters from the URLs in your reports.
     */
    stripSiteSearchCategoryParameters?: boolean;
    /**
     * Whether or not Analytics will strip search query parameters from the URLs in your reports.
     */
    stripSiteSearchQueryParameters?: boolean;
    /**
     * Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
     */
    timezone?: string;
    /**
     * View (Profile) type. Supported types: WEB or APP.
     */
    type?: string;
    /**
     * Website URL for this view (profile).
     */
    websiteUrl?: string;
}
