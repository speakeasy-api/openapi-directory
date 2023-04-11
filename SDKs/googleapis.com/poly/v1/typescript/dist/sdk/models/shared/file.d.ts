import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a file in Poly, which can be a root, resource, or thumbnail file.
 */
export declare class File extends SpeakeasyBase {
    /**
     * The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
     */
    contentType?: string;
    /**
     * The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename.
     */
    relativePath?: string;
    /**
     * The URL where the file data can be retrieved.
     */
    url?: string;
}
