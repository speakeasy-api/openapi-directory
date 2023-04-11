import { SpeakeasyBase } from "../../../internal/utils";
export declare class Image extends SpeakeasyBase {
    /**
     * A unique id representing this image.
     */
    id?: string;
    /**
     * A sha1 hash of the image that was uploaded.
     */
    sha1?: string;
    /**
     * A sha256 hash of the image that was uploaded.
     */
    sha256?: string;
    /**
     * A URL that will serve a preview of the image.
     */
    url?: string;
}
