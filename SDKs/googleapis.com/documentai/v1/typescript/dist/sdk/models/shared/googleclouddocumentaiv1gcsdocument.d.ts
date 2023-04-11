import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a document stored on Cloud Storage.
 */
export declare class GoogleCloudDocumentaiV1GcsDocument extends SpeakeasyBase {
    /**
     * The Cloud Storage object uri.
     */
    gcsUri?: string;
    /**
     * An IANA MIME type (RFC6838) of the content.
     */
    mimeType?: string;
}
