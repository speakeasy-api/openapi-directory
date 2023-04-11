import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
 */
export declare enum EventTagSiteFilterTypeEnum {
    Allowlist = "ALLOWLIST",
    Blocklist = "BLOCKLIST"
}
/**
 * Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
 */
export declare enum EventTagStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.
 */
export declare enum EventTagTypeEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG",
    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG",
    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}
/**
 * Contains properties of an event tag.
 */
export declare class EventTag extends SpeakeasyBase {
    /**
     * Account ID of this event tag. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
     */
    campaignId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    campaignIdDimensionValue?: DimensionValue;
    /**
     * Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.
     */
    enabledByDefault?: boolean;
    /**
     * Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.
     */
    excludeFromAdxRequests?: boolean;
    /**
     * ID of this event tag. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".
     */
    kind?: string;
    /**
     * Name of this event tag. This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
     */
    siteFilterType?: EventTagSiteFilterTypeEnum;
    /**
     * Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter.
     */
    siteIds?: string[];
    /**
     * Whether this tag is SSL-compliant or not. This is a read-only field.
     */
    sslCompliant?: boolean;
    /**
     * Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
     */
    status?: EventTagStatusEnum;
    /**
     * Subaccount ID of this event tag. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.
     */
    type?: EventTagTypeEnum;
    /**
     * Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion.
     */
    url?: string;
    /**
     * Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type.
     */
    urlEscapeLevels?: number;
}
