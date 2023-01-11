import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData
/** 
 * Data specific to Android app streams.
**/
export class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}


// GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput
/** 
 * Data specific to Android app streams.
**/
export class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
