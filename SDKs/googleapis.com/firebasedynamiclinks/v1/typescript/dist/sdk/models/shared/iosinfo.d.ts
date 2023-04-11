import { SpeakeasyBase } from "../../../internal/utils";
/**
 * iOS related attributes to the Dynamic Link..
 */
export declare class IosInfo extends SpeakeasyBase {
    /**
     * iOS App Store ID.
     */
    iosAppStoreId?: string;
    /**
     * iOS bundle ID of the app.
     */
    iosBundleId?: string;
    /**
     * Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param.
     */
    iosCustomScheme?: string;
    /**
     * Link to open on iOS if the app is not installed.
     */
    iosFallbackLink?: string;
    /**
     * iPad bundle ID of the app.
     */
    iosIpadBundleId?: string;
    /**
     * If specified, this overrides the ios_fallback_link value on iPads.
     */
    iosIpadFallbackLink?: string;
    /**
     * iOS minimum version.
     */
    iosMinimumVersion?: string;
}
