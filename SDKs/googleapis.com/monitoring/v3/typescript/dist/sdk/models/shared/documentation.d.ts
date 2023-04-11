import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A content string and a MIME type that describes the content string's format.
 */
export declare class Documentation extends SpeakeasyBase {
    /**
     * The body of the documentation, interpreted according to mime_type. The content may not exceed 8,192 Unicode characters and may not exceed more than 10,240 bytes when encoded in UTF-8 format, whichever is smaller. This text can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables).
     */
    content?: string;
    /**
     * The format of the content field. Presently, only the value "text/markdown" is supported. See Markdown (https://en.wikipedia.org/wiki/Markdown) for more information.
     */
    mimeType?: string;
}
