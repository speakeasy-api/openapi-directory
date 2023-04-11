import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An uploaded image. The resource for ImagesService.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * A unique id representing this image.
     */
    id?: string;
    /**
     * A sha1 hash of the image.
     */
    sha1?: string;
    /**
     * A sha256 hash of the image.
     */
    sha256?: string;
    /**
     * A URL that will serve a preview of the image.
     */
    url?: string;
}
