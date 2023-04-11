import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single thumbnail, with its size and format.
 */
export declare class Thumbnail extends SpeakeasyBase {
    /**
     * The thumbnail's content type, i.e. "image/png". Always set.
     */
    contentType?: string;
    /**
     * The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set.
     */
    data?: string;
    /**
     * The height of the thumbnail, in pixels. Always set.
     */
    heightPx?: number;
    /**
     * The width of the thumbnail, in pixels. Always set.
     */
    widthPx?: number;
}
