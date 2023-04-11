import { SpeakeasyBase } from "../../../internal/utils";
export declare class PretargetingConfigDimensions extends SpeakeasyBase {
    /**
     * Height in pixels.
     */
    height?: string;
    /**
     * Width in pixels.
     */
    width?: string;
}
export declare class PretargetingConfigExcludedPlacements extends SpeakeasyBase {
    /**
     * The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
     */
    token?: string;
    /**
     * The type of the placement.
     */
    type?: string;
}
export declare class PretargetingConfigPlacements extends SpeakeasyBase {
    /**
     * The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
     */
    token?: string;
    /**
     * The type of the placement.
     */
    type?: string;
}
/**
 * Successful response
 */
export declare class PretargetingConfig extends SpeakeasyBase {
    /**
     * The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.
     */
    billingId?: string;
    /**
     * The config id; generated automatically. Leave this field blank for insert requests.
     */
    configId?: string;
    /**
     * The name of the config. Must be unique. Required for all requests.
     */
    configName?: string;
    /**
     * List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.
     */
    creativeType?: string[];
    /**
     * Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.
     */
    dimensions?: PretargetingConfigDimensions[];
    /**
     * Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.
     */
    excludedContentLabels?: string[];
    /**
     * Requests containing any of these geo criteria ids will not match.
     */
    excludedGeoCriteriaIds?: string[];
    /**
     * Requests containing any of these placements will not match.
     */
    excludedPlacements?: PretargetingConfigExcludedPlacements[];
    /**
     * Requests containing any of these users list ids will not match.
     */
    excludedUserLists?: string[];
    /**
     * Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.
     */
    excludedVerticals?: string[];
    /**
     * Requests containing any of these geo criteria ids will match.
     */
    geoCriteriaIds?: string[];
    /**
     * Whether this config is active. Required for all requests.
     */
    isActive?: boolean;
    /**
     * The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".
     */
    kind?: string;
    /**
     * Request containing any of these language codes will match.
     */
    languages?: string[];
    /**
     * The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).
     */
    maximumQps?: string;
    /**
     * Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.
     */
    mobileCarriers?: string[];
    /**
     * Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.
     */
    mobileDevices?: string[];
    /**
     * Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.
     */
    mobileOperatingSystemVersions?: string[];
    /**
     * Requests containing any of these placements will match.
     */
    placements?: PretargetingConfigPlacements[];
    /**
     * Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.
     */
    platforms?: string[];
    /**
     * Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.
     */
    supportedCreativeAttributes?: string[];
    /**
     * Requests containing any of these user list ids will match.
     */
    userLists?: string[];
    /**
     * Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.
     */
    vendorTypes?: string[];
    /**
     * Requests containing any of these vertical ids will match.
     */
    verticals?: string[];
}
