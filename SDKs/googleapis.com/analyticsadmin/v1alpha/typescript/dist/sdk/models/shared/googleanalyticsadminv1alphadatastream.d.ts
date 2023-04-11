import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData, GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData, GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamData, GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";
/**
 * Required. Immutable. The type of this DataStream resource.
 */
export declare enum GoogleAnalyticsAdminV1alphaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED",
    WebDataStream = "WEB_DATA_STREAM",
    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM",
    IosAppDataStream = "IOS_APP_DATA_STREAM"
}
/**
 * A resource message representing a data stream.
 */
export declare class GoogleAnalyticsAdminV1alphaDataStream extends SpeakeasyBase {
    /**
     * Data specific to Android app streams.
     */
    androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData;
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
    iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
     */
    name?: string;
    /**
     * Required. Immutable. The type of this DataStream resource.
     */
    type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string;
    /**
     * Data specific to web streams.
     */
    webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamData;
}
/**
 * A resource message representing a data stream.
 */
export declare class GoogleAnalyticsAdminV1alphaDataStreamInput extends SpeakeasyBase {
    /**
     * Data specific to Android app streams.
     */
    androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput;
    /**
     * Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.
     */
    displayName?: string;
    /**
     * Data specific to iOS app streams.
     */
    iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput;
    /**
     * Required. Immutable. The type of this DataStream resource.
     */
    type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
    /**
     * Data specific to web streams.
     */
    webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput;
}
