import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSizeDetails } from "./imagesizedetails";
import { Thumbnail } from "./thumbnail";
/**
 * Information about the assets that are part of an image
**/
export declare class ImageAssets extends SpeakeasyBase {
    hugeJpg?: ImageSizeDetails;
    hugeThumb?: Thumbnail;
    largeThumb?: Thumbnail;
    mediumJpg?: ImageSizeDetails;
    preview?: Thumbnail;
    preview1000?: Thumbnail;
    preview1500?: Thumbnail;
    smallJpg?: ImageSizeDetails;
    smallThumb?: Thumbnail;
    supersizeJpg?: ImageSizeDetails;
    vectorEps?: ImageSizeDetails;
}
