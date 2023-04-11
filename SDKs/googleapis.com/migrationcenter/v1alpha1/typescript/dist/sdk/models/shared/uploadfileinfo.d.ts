import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource that contains a URI to which a data file can be uploaded.
 */
export declare class UploadFileInfo extends SpeakeasyBase {
    /**
     * Output only. The headers that were used to sign the URL.
     */
    headers?: Record<string, string>;
    /**
     * Output only. Upload URI for the file.
     */
    signedUri?: string;
    /**
     * Output only. Upload URI for the file.
     */
    uri?: string;
    /**
     * Output only. Expiration time of the upload URI.
     */
    uriExpirationTime?: string;
}
