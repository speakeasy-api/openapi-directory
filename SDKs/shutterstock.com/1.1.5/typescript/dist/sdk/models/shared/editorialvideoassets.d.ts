import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSizeDetails } from "./videosizedetails";
import { VideoPreviewUrl } from "./videopreviewurl";
/**
 * Asset information, including size and thumbnail URLs
**/
export declare class EditorialVideoAssets extends SpeakeasyBase {
    original?: VideoSizeDetails;
    previewMp4?: VideoPreviewUrl;
    previewWebm?: VideoPreviewUrl;
    thumbJpg?: VideoPreviewUrl;
}
