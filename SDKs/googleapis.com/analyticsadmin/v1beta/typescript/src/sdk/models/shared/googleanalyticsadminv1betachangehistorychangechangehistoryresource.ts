import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccount } from "./googleanalyticsadminv1betaaccount";
import { GoogleAnalyticsAdminV1betaConversionEvent } from "./googleanalyticsadminv1betaconversionevent";
import { GoogleAnalyticsAdminV1betaDataRetentionSettings } from "./googleanalyticsadminv1betadataretentionsettings";
import { GoogleAnalyticsAdminV1betaDataStream } from "./googleanalyticsadminv1betadatastream";
import { GoogleAnalyticsAdminV1betaFirebaseLink } from "./googleanalyticsadminv1betafirebaselink";
import { GoogleAnalyticsAdminV1betaGoogleAdsLink } from "./googleanalyticsadminv1betagoogleadslink";
import { GoogleAnalyticsAdminV1betaMeasurementProtocolSecret } from "./googleanalyticsadminv1betameasurementprotocolsecret";
import { GoogleAnalyticsAdminV1betaProperty } from "./googleanalyticsadminv1betaproperty";



// GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
/** 
 * A snapshot of a resource as before or after the result of a change in change history.
**/
export class GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GoogleAnalyticsAdminV1betaAccount;

  @SpeakeasyMetadata({ data: "json, name=conversionEvent" })
  conversionEvent?: GoogleAnalyticsAdminV1betaConversionEvent;

  @SpeakeasyMetadata({ data: "json, name=dataRetentionSettings" })
  dataRetentionSettings?: GoogleAnalyticsAdminV1betaDataRetentionSettings;

  @SpeakeasyMetadata({ data: "json, name=dataStream" })
  dataStream?: GoogleAnalyticsAdminV1betaDataStream;

  @SpeakeasyMetadata({ data: "json, name=firebaseLink" })
  firebaseLink?: GoogleAnalyticsAdminV1betaFirebaseLink;

  @SpeakeasyMetadata({ data: "json, name=googleAdsLink" })
  googleAdsLink?: GoogleAnalyticsAdminV1betaGoogleAdsLink;

  @SpeakeasyMetadata({ data: "json, name=measurementProtocolSecret" })
  measurementProtocolSecret?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleAnalyticsAdminV1betaProperty;
}
