import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSizeDetails } from "./imagesizedetails";
import { Thumbnail } from "./thumbnail";
/**
 * Asset information, including size and thumbnail URLs
 */
export declare class EditorialAssets extends SpeakeasyBase {
    /**
     * Image size information
     */
    mediumJpg?: ImageSizeDetails;
    /**
     * Image size information
     */
    original?: ImageSizeDetails;
    /**
     * Image size information
     */
    smallJpg?: ImageSizeDetails;
    /**
     * Image thumbnail information
     */
    thumb170?: Thumbnail;
    /**
     * Image thumbnail information
     */
    thumb220?: Thumbnail;
    /**
     * Image thumbnail information
     */
    watermark1500?: Thumbnail;
    /**
     * Image thumbnail information
     */
    watermark450?: Thumbnail;
}
