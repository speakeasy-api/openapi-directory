import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData
/** 
 * Data specific to iOS app streams.
**/
export class GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;
}


// GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput
/** 
 * Data specific to iOS app streams.
**/
export class GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;
}
