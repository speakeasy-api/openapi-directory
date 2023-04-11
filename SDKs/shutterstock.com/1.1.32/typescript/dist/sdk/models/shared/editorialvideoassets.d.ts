import { SpeakeasyBase } from "../../../internal/utils";
import { VideoPreviewUrl } from "./videopreviewurl";
import { VideoSizeDetails } from "./videosizedetails";
/**
 * Asset information, including size and thumbnail URLs
 */
export declare class EditorialVideoAssets extends SpeakeasyBase {
    /**
     * Video asset information
     */
    original?: VideoSizeDetails;
    /**
     * Video preview information
     */
    previewMp4?: VideoPreviewUrl;
    /**
     * Video preview information
     */
    previewWebm?: VideoPreviewUrl;
    /**
     * Video preview information
     */
    thumbJpg?: VideoPreviewUrl;
}
