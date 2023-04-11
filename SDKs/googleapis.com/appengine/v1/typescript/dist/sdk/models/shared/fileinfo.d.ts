import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.
 */
export declare class FileInfo extends SpeakeasyBase {
    /**
     * The MIME type of the file.Defaults to the value from Google Cloud Storage.
     */
    mimeType?: string;
    /**
     * The SHA1 hash of the file, in hex.
     */
    sha1Sum?: string;
    /**
     * URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com//'.
     */
    sourceUrl?: string;
}
