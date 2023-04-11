import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData, GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1betadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData, GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1betadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1betaDataStreamWebStreamData, GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1betadatastreamwebstreamdata";
/**
 * Required. Immutable. The type of this DataStream resource.
 */
export declare enum GoogleAnalyticsAdminV1betaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED",
    WebDataStream = "WEB_DATA_STREAM",
    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM",
    IosAppDataStream = "IOS_APP_DATA_STREAM"
}
/**
 * A resource message representing a data stream.
 */
export declare class GoogleAnalyticsAdminV1betaDataStream extends SpeakeasyBase {
    /**
     * Data specific to Android app streams.
     */
    androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData;
    /**
     * Output only. Time when this stream was originally created.
     */
    createTime?: string;
    /**
     * Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.
     */
    displayName?: string;
    /**
     * Data specific to iOS app streams.
     */
    iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
     */
    name?: string;
    /**
     * Required. Immutable. The type of this DataStream resource.
     */
    type?: GoogleAnalyticsAdminV1betaDataStreamTypeEnum;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string;
    /**
     * Data specific to web streams.
     */
    webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamData;
}
/**
 * A resource message representing a data stream.
 */
export declare class GoogleAnalyticsAdminV1betaDataStreamInput extends SpeakeasyBase {
    /**
     * Data specific to Android app streams.
     */
    androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput;
    /**
     * Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.
     */
    displayName?: string;
    /**
     * Data specific to iOS app streams.
     */
    iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput;
    /**
     * Required. Immutable. The type of this DataStream resource.
     */
    type?: GoogleAnalyticsAdminV1betaDataStreamTypeEnum;
    /**
     * Data specific to web streams.
     */
    webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput;
}
