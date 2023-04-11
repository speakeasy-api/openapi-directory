import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchema } from "./apprestrictionsschema";
import { AppVersion } from "./appversion";
import { ProductPermission } from "./productpermission";
import { ProductSigningCertificate } from "./productsigningcertificate";
import { TrackInfo } from "./trackinfo";
export declare enum ProductAvailableTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * The content rating for this app.
 */
export declare enum ProductContentRatingEnum {
    RatingUnknown = "ratingUnknown",
    All = "all",
    PreTeen = "preTeen",
    Teen = "teen",
    Mature = "mature"
}
/**
 * How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.
 */
export declare enum ProductDistributionChannelEnum {
    PublicGoogleHosted = "publicGoogleHosted",
    PrivateGoogleHosted = "privateGoogleHosted",
    PrivateSelfHosted = "privateSelfHosted"
}
export declare enum ProductFeaturesEnum {
    FeatureUnknown = "featureUnknown",
    VpnApp = "vpnApp"
}
/**
 * Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).
 */
export declare enum ProductProductPricingEnum {
    Unknown = "unknown",
    Free = "free",
    FreeWithInAppPurchase = "freeWithInAppPurchase",
    Paid = "paid"
}
/**
 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
 */
export declare class Product extends SpeakeasyBase {
    /**
     * Represents the list of app restrictions available to be pre-configured for the product.
     */
    appRestrictionsSchema?: AppRestrictionsSchema;
    /**
     * The tracks visible to the enterprise.
     */
    appTracks?: TrackInfo[];
    /**
     * App versions currently available for this product.
     */
    appVersion?: AppVersion[];
    /**
     * The name of the author of the product (for example, the app developer).
     */
    authorName?: string;
    /**
     * The countries which this app is available in.
     */
    availableCountries?: string[];
    /**
     * Deprecated, use appTracks instead.
     */
    availableTracks?: ProductAvailableTracksEnum[];
    /**
     * The app category (e.g. RACING, SOCIAL, etc.)
     */
    category?: string;
    /**
     * The content rating for this app.
     */
    contentRating?: ProductContentRatingEnum;
    /**
     * The localized promotional description, if available.
     */
    description?: string;
    /**
     * A link to the (consumer) Google Play details page for the product.
     */
    detailsUrl?: string;
    /**
     * How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.
     */
    distributionChannel?: ProductDistributionChannelEnum;
    /**
     * Noteworthy features (if any) of this product.
     */
    features?: ProductFeaturesEnum[];
    /**
     * A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.
     */
    iconUrl?: string;
    /**
     * The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch.
     */
    lastUpdatedTimestampMillis?: string;
    /**
     * The minimum Android SDK necessary to run the app.
     */
    minAndroidSDKVersion?: number;
    /**
     * A list of permissions required by the app.
     */
    permissions?: ProductPermission[];
    /**
     * A string of the form *app:<package name>*. For example, app:com.google.android.gm represents the Gmail app.
     */
    productId?: string;
    /**
     * Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).
     */
    productPricing?: ProductProductPricingEnum;
    /**
     * A description of the recent changes made to the app.
     */
    recentChanges?: string;
    /**
     * Deprecated.
     */
    requiresContainerApp?: boolean;
    /**
     * A list of screenshot links representing the app.
     */
    screenshotUrls?: string[];
    signingCertificate?: ProductSigningCertificate;
    /**
     * A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.
     */
    smallIconUrl?: string;
    /**
     * The name of the product.
     */
    title?: string;
    /**
     * A link to the managed Google Play details page for the product, for use by an Enterprise admin.
     */
    workDetailsUrl?: string;
}
