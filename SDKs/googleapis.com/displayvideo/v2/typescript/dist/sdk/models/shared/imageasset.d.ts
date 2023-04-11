import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * Meta data of an image asset.
 */
export declare class ImageAsset extends SpeakeasyBase {
    /**
     * File size of the image asset in bytes.
     */
    fileSize?: string;
    /**
     * Dimensions.
     */
    fullSize?: Dimensions;
    /**
     * MIME type of the image asset.
     */
    mimeType?: string;
}
