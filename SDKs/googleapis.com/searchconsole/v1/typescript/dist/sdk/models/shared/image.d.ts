import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe image data.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future.
     */
    data?: string;
    /**
     * The mime-type of the image data.
     */
    mimeType?: string;
}
