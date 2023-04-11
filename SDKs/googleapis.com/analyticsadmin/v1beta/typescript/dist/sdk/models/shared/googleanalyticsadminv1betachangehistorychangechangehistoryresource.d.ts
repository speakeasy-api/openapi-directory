import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccount } from "./googleanalyticsadminv1betaaccount";
import { GoogleAnalyticsAdminV1betaConversionEvent } from "./googleanalyticsadminv1betaconversionevent";
import { GoogleAnalyticsAdminV1betaDataRetentionSettings } from "./googleanalyticsadminv1betadataretentionsettings";
import { GoogleAnalyticsAdminV1betaDataStream } from "./googleanalyticsadminv1betadatastream";
import { GoogleAnalyticsAdminV1betaFirebaseLink } from "./googleanalyticsadminv1betafirebaselink";
import { GoogleAnalyticsAdminV1betaGoogleAdsLink } from "./googleanalyticsadminv1betagoogleadslink";
import { GoogleAnalyticsAdminV1betaMeasurementProtocolSecret } from "./googleanalyticsadminv1betameasurementprotocolsecret";
import { GoogleAnalyticsAdminV1betaProperty } from "./googleanalyticsadminv1betaproperty";
/**
 * A snapshot of a resource as before or after the result of a change in change history.
 */
export declare class GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource extends SpeakeasyBase {
    /**
     * A resource message representing a Google Analytics account.
     */
    account?: GoogleAnalyticsAdminV1betaAccount;
    /**
     * A conversion event in a Google Analytics property.
     */
    conversionEvent?: GoogleAnalyticsAdminV1betaConversionEvent;
    /**
     * Settings values for data retention. This is a singleton resource.
     */
    dataRetentionSettings?: GoogleAnalyticsAdminV1betaDataRetentionSettings;
    /**
     * A resource message representing a data stream.
     */
    dataStream?: GoogleAnalyticsAdminV1betaDataStream;
    /**
     * A link between a GA4 property and a Firebase project.
     */
    firebaseLink?: GoogleAnalyticsAdminV1betaFirebaseLink;
    /**
     * A link between a GA4 property and a Google Ads account.
     */
    googleAdsLink?: GoogleAnalyticsAdminV1betaGoogleAdsLink;
    /**
     * A secret value used for sending hits to Measurement Protocol.
     */
    measurementProtocolSecret?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
    /**
     * A resource message representing a Google Analytics GA4 property.
     */
    property?: GoogleAnalyticsAdminV1betaProperty;
}
