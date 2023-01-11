import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData } from "./googleanalyticsadminv1betadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData } from "./googleanalyticsadminv1betadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamWebStreamData } from "./googleanalyticsadminv1betadatastreamwebstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1betadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1betadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1betadatastreamwebstreamdata";


export enum GoogleAnalyticsAdminV1betaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED",
    WebDataStream = "WEB_DATA_STREAM",
    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM",
    IosAppDataStream = "IOS_APP_DATA_STREAM"
}


// GoogleAnalyticsAdminV1betaDataStream
/** 
 * A resource message representing a data stream.
**/
export class GoogleAnalyticsAdminV1betaDataStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidAppStreamData" })
  androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iosAppStreamData" })
  iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAnalyticsAdminV1betaDataStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=webStreamData" })
  webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamData;
}


// GoogleAnalyticsAdminV1betaDataStreamInput
/** 
 * A resource message representing a data stream.
**/
export class GoogleAnalyticsAdminV1betaDataStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidAppStreamData" })
  androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iosAppStreamData" })
  iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAnalyticsAdminV1betaDataStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webStreamData" })
  webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput;
}
