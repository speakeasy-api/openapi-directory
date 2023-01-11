import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData } from "./googleanalyticsadminv1betadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData } from "./googleanalyticsadminv1betadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamWebStreamData } from "./googleanalyticsadminv1betadatastreamwebstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1betadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1betadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1betadatastreamwebstreamdata";
export declare enum GoogleAnalyticsAdminV1betaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED",
    WebDataStream = "WEB_DATA_STREAM",
    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM",
    IosAppDataStream = "IOS_APP_DATA_STREAM"
}
/**
 * A resource message representing a data stream.
**/
export declare class GoogleAnalyticsAdminV1betaDataStream extends SpeakeasyBase {
    androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData;
    createTime?: string;
    displayName?: string;
    iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData;
    name?: string;
    type?: GoogleAnalyticsAdminV1betaDataStreamTypeEnum;
    updateTime?: string;
    webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamData;
}
/**
 * A resource message representing a data stream.
**/
export declare class GoogleAnalyticsAdminV1betaDataStreamInput extends SpeakeasyBase {
    androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput;
    displayName?: string;
    iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput;
    type?: GoogleAnalyticsAdminV1betaDataStreamTypeEnum;
    webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput;
}
