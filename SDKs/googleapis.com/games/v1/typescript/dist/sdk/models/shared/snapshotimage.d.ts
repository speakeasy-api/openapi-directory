import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image of a snapshot.
 */
export declare class SnapshotImage extends SpeakeasyBase {
    /**
     * The height of the image.
     */
    height?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotImage`.
     */
    kind?: string;
    /**
     * The MIME type of the image.
     */
    mimeType?: string;
    /**
     * The URL of the image. This URL may be invalidated at any time and should not be cached.
     */
    url?: string;
    /**
     * The width of the image.
     */
    width?: number;
}
