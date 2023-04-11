import { SpeakeasyBase } from "../../../internal/utils";
import { MediaFile } from "./mediafile";
/**
 * The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method.
 */
export declare enum VideoMetadataVastVersionEnum {
    VastVersionUnspecified = "VAST_VERSION_UNSPECIFIED",
    VastVersion10 = "VAST_VERSION_1_0",
    VastVersion20 = "VAST_VERSION_2_0",
    VastVersion30 = "VAST_VERSION_3_0",
    VastVersion40 = "VAST_VERSION_4_0"
}
/**
 * Video metadata for a creative.
 */
export declare class VideoMetadata extends SpeakeasyBase {
    /**
     * The duration of the ad. Can be used to filter the response of the creatives.list method.
     */
    duration?: string;
    /**
     * Is this a valid VAST ad? Can be used to filter the response of the creatives.list method.
     */
    isValidVast?: boolean;
    /**
     * Is this a VPAID ad? Can be used to filter the response of the creatives.list method.
     */
    isVpaid?: boolean;
    /**
     * The list of all media files declared in the VAST. If there are multiple VASTs in a wrapper chain, this includes the media files from the deepest one in the chain.
     */
    mediaFiles?: MediaFile[];
    /**
     * The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method.
     */
    skipOffset?: string;
    /**
     * The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method.
     */
    vastVersion?: VideoMetadataVastVersionEnum;
}
