import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";
import { GoogleAnalyticsAdminV1alphaAttributionSettings } from "./googleanalyticsadminv1alphaattributionsettings";
import { GoogleAnalyticsAdminV1alphaBigQueryLink } from "./googleanalyticsadminv1alphabigquerylink";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";
import { GoogleAnalyticsAdminV1alphaDataRetentionSettings } from "./googleanalyticsadminv1alphadataretentionsettings";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal";
import { GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings } from "./googleanalyticsadminv1alphaenhancedmeasurementsettings";
import { GoogleAnalyticsAdminV1alphaExpandedDataSet } from "./googleanalyticsadminv1alphaexpandeddataset";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";
import { GoogleAnalyticsAdminV1alphaGoogleSignalsSettings } from "./googleanalyticsadminv1alphagooglesignalssettings";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";
/**
 * A snapshot of a resource as before or after the result of a change in change history.
 */
export declare class GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource extends SpeakeasyBase {
    /**
     * A resource message representing a Google Analytics account.
     */
    account?: GoogleAnalyticsAdminV1alphaAccount;
    /**
     * The attribution settings used for a given property. This is a singleton resource.
     */
    attributionSettings?: GoogleAnalyticsAdminV1alphaAttributionSettings;
    /**
     * A link between a GA4 Property and BigQuery project.
     */
    bigqueryLink?: GoogleAnalyticsAdminV1alphaBigQueryLink;
    /**
     * A conversion event in a Google Analytics property.
     */
    conversionEvent?: GoogleAnalyticsAdminV1alphaConversionEvent;
    /**
     * A definition for a CustomDimension.
     */
    customDimension?: GoogleAnalyticsAdminV1alphaCustomDimension;
    /**
     * A definition for a custom metric.
     */
    customMetric?: GoogleAnalyticsAdminV1alphaCustomMetric;
    /**
     * Settings values for data retention. This is a singleton resource.
     */
    dataRetentionSettings?: GoogleAnalyticsAdminV1alphaDataRetentionSettings;
    /**
     * A resource message representing a data stream.
     */
    dataStream?: GoogleAnalyticsAdminV1alphaDataStream;
    /**
     * A link between a GA4 property and a Display & Video 360 advertiser.
     */
    displayVideo360AdvertiserLink?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
    /**
     * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
     */
    displayVideo360AdvertiserLinkProposal?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
    /**
     * Singleton resource under a WebDataStream, configuring measurement of additional site interactions and content.
     */
    enhancedMeasurementSettings?: GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings;
    /**
     * A resource message representing a GA4 ExpandedDataSet.
     */
    expandedDataSet?: GoogleAnalyticsAdminV1alphaExpandedDataSet;
    /**
     * A link between a GA4 property and a Firebase project.
     */
    firebaseLink?: GoogleAnalyticsAdminV1alphaFirebaseLink;
    /**
     * A link between a GA4 property and a Google Ads account.
     */
    googleAdsLink?: GoogleAnalyticsAdminV1alphaGoogleAdsLink;
    /**
     * Settings values for Google Signals. This is a singleton resource.
     */
    googleSignalsSettings?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;
    /**
     * A secret value used for sending hits to Measurement Protocol.
     */
    measurementProtocolSecret?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
    /**
     * A resource message representing a Google Analytics GA4 property.
     */
    property?: GoogleAnalyticsAdminV1alphaProperty;
    /**
     * A link between a GA4 property and a Search Ads 360 entity.
     */
    searchAds360Link?: GoogleAnalyticsAdminV1alphaSearchAds360Link;
}
