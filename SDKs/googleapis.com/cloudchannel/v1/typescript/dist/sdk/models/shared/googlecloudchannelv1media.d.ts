import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the media.
 */
export declare enum GoogleCloudChannelV1MediaTypeEnum {
    MediaTypeUnspecified = "MEDIA_TYPE_UNSPECIFIED",
    MediaTypeImage = "MEDIA_TYPE_IMAGE"
}
/**
 * Represents media information.
 */
export declare class GoogleCloudChannelV1Media extends SpeakeasyBase {
    /**
     * URL of the media.
     */
    content?: string;
    /**
     * Title of the media.
     */
    title?: string;
    /**
     * Type of the media.
     */
    type?: GoogleCloudChannelV1MediaTypeEnum;
}
