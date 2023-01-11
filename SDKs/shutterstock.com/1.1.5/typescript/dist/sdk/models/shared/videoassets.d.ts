import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSizeDetails } from "./videosizedetails";
import { Url } from "./url";
import { Urls } from "./urls";
/**
 * Video asset information
**/
export declare class VideoAssets extends SpeakeasyBase {
    fourk?: VideoSizeDetails;
    hd?: VideoSizeDetails;
    previewJpg?: Url;
    previewMp4?: Url;
    previewWebm?: Url;
    sd?: VideoSizeDetails;
    thumbJpg?: Url;
    thumbJpgs?: Urls;
    thumbMp4?: Url;
    thumbWebm?: Url;
    web?: VideoSizeDetails;
}
