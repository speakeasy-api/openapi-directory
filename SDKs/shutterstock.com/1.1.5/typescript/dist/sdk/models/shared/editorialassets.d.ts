import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSizeDetails } from "./imagesizedetails";
import { Thumbnail } from "./thumbnail";
/**
 * Asset information, including size and thumbnail URLs
**/
export declare class EditorialAssets extends SpeakeasyBase {
    mediumJpg?: ImageSizeDetails;
    original?: ImageSizeDetails;
    smallJpg?: ImageSizeDetails;
    thumb170?: Thumbnail;
    thumb220?: Thumbnail;
    watermark1500?: Thumbnail;
    watermark450?: Thumbnail;
}
