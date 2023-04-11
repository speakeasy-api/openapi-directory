import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1VideoThumbnail } from "./googleclouddatalabelingv1beta1videothumbnail";
/**
 * Container of information of a video.
 */
export declare class GoogleCloudDatalabelingV1beta1VideoPayload extends SpeakeasyBase {
    /**
     * FPS of the video.
     */
    frameRate?: number;
    /**
     * Video format.
     */
    mimeType?: string;
    /**
     * Signed uri of the video file in the service bucket.
     */
    signedUri?: string;
    /**
     * The list of video thumbnails.
     */
    videoThumbnails?: GoogleCloudDatalabelingV1beta1VideoThumbnail[];
    /**
     * Video uri from the user bucket.
     */
    videoUri?: string;
}
