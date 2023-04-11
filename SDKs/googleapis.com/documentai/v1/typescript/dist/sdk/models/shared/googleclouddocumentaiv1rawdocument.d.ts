import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payload message of raw document content (bytes).
 */
export declare class GoogleCloudDocumentaiV1RawDocument extends SpeakeasyBase {
    /**
     * Inline document content.
     */
    content?: string;
    /**
     * An IANA MIME type (RFC6838) indicating the nature and format of the content.
     */
    mimeType?: string;
}
