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
**/
export declare class GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource extends SpeakeasyBase {
    account?: GoogleAnalyticsAdminV1betaAccount;
    conversionEvent?: GoogleAnalyticsAdminV1betaConversionEvent;
    dataRetentionSettings?: GoogleAnalyticsAdminV1betaDataRetentionSettings;
    dataStream?: GoogleAnalyticsAdminV1betaDataStream;
    firebaseLink?: GoogleAnalyticsAdminV1betaFirebaseLink;
    googleAdsLink?: GoogleAnalyticsAdminV1betaGoogleAdsLink;
    measurementProtocolSecret?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
    property?: GoogleAnalyticsAdminV1betaProperty;
}
