import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSizeDetails } from "./imagesizedetails";
import { Thumbnail } from "./thumbnail";
/**
 * Information about the assets that are part of an image
 */
export declare class ImageAssets extends SpeakeasyBase {
    /**
     * Image size information
     */
    hugeJpg?: ImageSizeDetails;
    /**
     * Image thumbnail information
     */
    hugeThumb?: Thumbnail;
    /**
     * Image thumbnail information
     */
    largeThumb?: Thumbnail;
    /**
     * Image size information
     */
    mediumJpg?: ImageSizeDetails;
    /**
     * Image thumbnail information
     */
    preview?: Thumbnail;
    /**
     * Image thumbnail information
     */
    preview1000?: Thumbnail;
    /**
     * Image thumbnail information
     */
    preview1500?: Thumbnail;
    /**
     * Image size information
     */
    smallJpg?: ImageSizeDetails;
    /**
     * Image thumbnail information
     */
    smallThumb?: Thumbnail;
    /**
     * Image size information
     */
    supersizeJpg?: ImageSizeDetails;
    /**
     * Image size information
     */
    vectorEps?: ImageSizeDetails;
}
