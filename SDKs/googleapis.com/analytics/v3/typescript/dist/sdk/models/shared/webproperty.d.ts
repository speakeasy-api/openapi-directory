import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Child link for this web property. Points to the list of views (profiles) for this web property.
 */
export declare class WebpropertyChildLink extends SpeakeasyBase {
    /**
     * Link to the list of views (profiles) for this web property.
     */
    href?: string;
    /**
     * Type of the parent link. Its value is "analytics#profiles".
     */
    type?: string;
}
/**
 * Parent link for this web property. Points to the account to which this web property belongs.
 */
export declare class WebpropertyParentLink extends SpeakeasyBase {
    /**
     * Link to the account for this web property.
     */
    href?: string;
    /**
     * Type of the parent link. Its value is "analytics#account".
     */
    type?: string;
}
/**
 * Permissions the user has for this web property.
 */
export declare class WebpropertyPermissions extends SpeakeasyBase {
    /**
     * All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account.
     */
    effective?: string[];
}
/**
 * JSON template for an Analytics web property.
 */
export declare class Webproperty extends SpeakeasyBase {
    /**
     * Account ID to which this web property belongs.
     */
    accountId?: string;
    /**
     * Child link for this web property. Points to the list of views (profiles) for this web property.
     */
    childLink?: WebpropertyChildLink;
    /**
     * Time this web property was created.
     */
    created?: Date;
    /**
     * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
     *
     * @remarks
     * Set to false to delete data associated with the user identifier automatically after the rentention period.
     * This property cannot be set on insert.
     */
    dataRetentionResetOnNewActivity?: boolean;
    /**
     * The length of time for which user and event data is retained.
     *
     * @remarks
     * This property cannot be set on insert.
     */
    dataRetentionTtl?: string;
    /**
     * Default view (profile) ID.
     */
    defaultProfileId?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string;
    /**
     * The industry vertical/category selected for this web property.
     */
    industryVertical?: string;
    /**
     * Internal ID for this web property.
     */
    internalWebPropertyId?: string;
    /**
     * Resource type for Analytics WebProperty.
     */
    kind?: string;
    /**
     * Level for this web property. Possible values are STANDARD or PREMIUM.
     */
    level?: string;
    /**
     * Name of this web property.
     */
    name?: string;
    /**
     * Parent link for this web property. Points to the account to which this web property belongs.
     */
    parentLink?: WebpropertyParentLink;
    /**
     * Permissions the user has for this web property.
     */
    permissions?: WebpropertyPermissions;
    /**
     * View (Profile) count for this web property.
     */
    profileCount?: number;
    /**
     * Link for this web property.
     */
    selfLink?: string;
    /**
     * Indicates whether this web property is starred or not.
     */
    starred?: boolean;
    /**
     * Time this web property was last modified.
     */
    updated?: Date;
    /**
     * Website url for this web property.
     */
    websiteUrl?: string;
}
/**
 * JSON template for an Analytics web property.
 */
export declare class WebpropertyInput extends SpeakeasyBase {
    /**
     * Account ID to which this web property belongs.
     */
    accountId?: string;
    /**
     * Child link for this web property. Points to the list of views (profiles) for this web property.
     */
    childLink?: WebpropertyChildLink;
    /**
     * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
     *
     * @remarks
     * Set to false to delete data associated with the user identifier automatically after the rentention period.
     * This property cannot be set on insert.
     */
    dataRetentionResetOnNewActivity?: boolean;
    /**
     * The length of time for which user and event data is retained.
     *
     * @remarks
     * This property cannot be set on insert.
     */
    dataRetentionTtl?: string;
    /**
     * Default view (profile) ID.
     */
    defaultProfileId?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string;
    /**
     * The industry vertical/category selected for this web property.
     */
    industryVertical?: string;
    /**
     * Name of this web property.
     */
    name?: string;
    /**
     * Parent link for this web property. Points to the account to which this web property belongs.
     */
    parentLink?: WebpropertyParentLink;
    /**
     * Indicates whether this web property is starred or not.
     */
    starred?: boolean;
    /**
     * Website url for this web property.
     */
    websiteUrl?: string;
}
